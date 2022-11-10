'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('products', [
    {
     image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit',
     name: 'Sofa',
     price: 150,
     description: '7 x 5 meters',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1NzAwNjcwNg&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
     name: 'chandelier',
     price: 50,
     description: 'length up to 3 meters',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     image: 'https://images.unsplash.com/photo-1587377224035-72144bf39e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NzU1MDA1Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
     name: 'Pan',
     price: 35,
     description: 'diameter = 30cm',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
     image: 'https://images.unsplash.com/photo-1504823787925-0abb85d5d7b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY2NzU1MDQxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
     name: 'Shelf',
     price: 20,
     description: '1.3 x 0.35 meters',
     createdAt: new Date(),
     updatedAt: new Date()
   }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
