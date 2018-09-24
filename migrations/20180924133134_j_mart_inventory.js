
exports.up = function(knex, Promise) {
    return knex.schema.createTable('items', (item) => {
        item.increments('id');
        item.string('name');
        item.string('description');
        item.integer('quantity');
        item.float('price');        
        item.string('image URL');
        item.iteger('categoryID');
    }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('items');
};
