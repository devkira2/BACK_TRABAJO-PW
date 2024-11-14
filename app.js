import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import productRoutes from './src/routes/productRoutes.js';
import productCategoryRoutes from './src/routes/productCategoryRoutes.js';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'LA ACARREADA FUNCIONA'})
});

app.use('/products', productRoutes);
app.use('/productCategory', productCategoryRoutes);

export default app;