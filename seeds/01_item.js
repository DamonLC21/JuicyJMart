
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: 'Redbull', description: 'energy drink', quantity: 4, price: 2.00, image_URL: 'https://getitfree.us/wp-content/uploads/2017/08/RedBull-1.jpg', categoryID: 1 },
        {name: 'Monster', description: 'energy drink', quantity: 15, price: 2.00, image_URL: 'https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/9acf4bf6-9b8f-4dbc-97fe-034459d5ee3c.png._CB276149877_.png', categoryID: 1 },
        {name: 'La Croix', description: 'sparkling water', quantity: 8, price: 1.00, image_URL: 'https://products0.imgix.drizly.com/ci-la-croix-pamplemousse-580e79497e7b4274.png?auto=format%2Ccompress&fm=jpeg&q=20', categoryID: 1 },
        {name: 'Cheese its', description: 'delicous savory cheesy crackers', quantity: 4, price: .75, image_URL: 'https://images-na.ssl-images-amazon.com/images/I/51CcpMs9L5L.jpg', categoryID: 2 },
        {name: 'Chips', description: 'delicous savory variety pack of chips', quantity: 4, price: .75, image_URL: 'https://images.costcobusinessdelivery.com/ImageDelivery/imageService?profileId=12028466&imageId=615346__1&recipeName=350', categoryID: 2 },
        {name: 'Cookies', description: 'Delicious savory variety pack of cookies', quantity: 4, price: .75, image_URL: 'http://www.varietydisposable.com/wp-content/uploads/2017/07/imageService-1.jpg', categoryID: 2 }
      ]);
    });
};
