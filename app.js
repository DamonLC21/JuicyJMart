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
app.get('/categories', (req, res, next)   =>  {
    queries.listAllCategories().then((data) => {
        res.json({data}); 
    })
})  
app.post('/', (req, res) => {
    queries.createItem(req.body)
    .then((data) => {
        res.json({data});
    });
});
app.put('/:id', (req,res) =>   {
    queries.updateItem(req.body, req.params.id).then(itemData => res.json({data: itemData}))
});
app.delete('/:id', (req, res) => {
    queries.deleteItem(req.params.id).then((data) =>    {
        res.json({data})
    });
});
app.get('/:id', (req, res, next) => {
    queries.selectItem(req.params.id).then((data)=> {
        res.json({data});
    })
})

