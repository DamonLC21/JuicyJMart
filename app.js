const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const queries = require('./queries');

const port = process.env.PORT || 5577
app.listen(port, () => {
    console.log(`wanna know what port is active you twerp? It's port ${port}`)
})

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res, next) =>    {
    queries.listAllItems().then((data) =>{
        res.json({data});
    })
})