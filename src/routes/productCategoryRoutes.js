import express from 'express';
import productCategoryController from '../controllers/productCategoryController.js';

const router = express.Router();

router.get('/', productCategoryController.findAll);
router.get('/:id', productCategoryController.findOne);
router.post('/', productCategoryController.create);
router.put('/:id', productCategoryController.update);
router.delete('/:id', productCategoryController.remove);

export default router;