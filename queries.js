const connection = require('./knexfile')[process.env.NODE_ENV || 'development'];
const knex = require('knex')(connection);

function listAllItems() {
    return knex('items').orderBy('id', 'ascending');
}
function listAllCategories()    {
    return knex('categories');
}
function createItem(newItem)   {
    return knex('items').insert(newItem).returning('*');
}
function updateItem(item, id) {
    return knex('items').update(item).where('id', id);
}
function deleteItem(id) {
    return knex('items').where('id', id).delete();
}
function selectItem(id) {
    return knex('items').where('categoryID', id);
}






module.exports = {
    listAllItems,
    listAllCategories,
    createItem,
    updateItem,
    deleteItem,
    selectItem
}