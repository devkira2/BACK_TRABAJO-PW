import ProductService from '../services/productService.js';

const findAll = async (req, res) => {
    try {
        const result = await ProductService.findAll();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const findOne = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ProductService.findOne(id);
        return result ? res.status(200).json(result) : res.status(404).json({ message: 'Product not found' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const create = async (req, res) => {
    try {
        const result = await ProductService.create(req.body);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ProductService.update(id, req.body);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

const remove = async (req, res) => {
    try {
        const { id } = req.params;
        await ProductService.remove(id);
        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default { findAll, findOne, create, update, remove };