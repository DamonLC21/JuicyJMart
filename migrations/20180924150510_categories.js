


exports.up = function(knex, Promise) {
    return knex.schema.createTable('categories', (category) => {
        category.increments('id');
        category.string('type');
    }) 
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('categories');
};

  


