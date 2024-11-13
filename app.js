import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'


let app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'LA ACARREADA FUNCIONA'})
})

/*routes import*/

app.use("/")