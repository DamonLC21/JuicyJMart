const connection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(connection);

function listAllItems() {
    return knex('items');
}




module.exports = {
    listAllItems,
}