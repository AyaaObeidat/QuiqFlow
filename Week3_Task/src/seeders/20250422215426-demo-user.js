'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Users', [{
      name:'Ayah Obeidat',
      email:'Ayah@gmail.com',
      createdAt:new Date(),
      updatedAt : new Date()
      }], {});
  
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('Users', null, {});
  }
};
