const connection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(connection);

function listAllItems() {
    return knex('items');
}
function listAllCategories()    {
    return knex('categories');
}




module.exports = {
    listAllItems,
    listAllCategories
}