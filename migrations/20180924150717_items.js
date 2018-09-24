
exports.up = function(knex, Promise) {
    return knex.schema.createTable('items', (item) => {
        item.increments('id');
        item.string('name');
        item.string('description');
        item.integer('quantity');
        item.float('price');        
        item.string('image_URL');
        item.integer('categoryID').unsigned();
        item.foreign('categoryID').references('categories.id')
    }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('items');
};
