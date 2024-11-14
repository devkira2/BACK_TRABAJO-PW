import ProductCategory from "../models/productCategory.js";

const findAll = async () => {
    return await ProductCategory.findAll();
};

const findOne = async (id) => {
    return await ProductCategory.findByPk(id);
};

const create = async (data) => {
    return await ProductCategory.create(data);
};

const update = async (id, data) => {
    const category = await ProductCategory.findByPk(id);
    if (!category) throw new Error('Categoria no encontrado');
    await category.update(data);
    return category;
};

const remove = async (id) => {
    return await ProductCategory.destroy({where: {id}});
};

export default { findAll, findOne, create, update, remove}