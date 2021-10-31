"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("users", [
      {
        username: "John",
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
        picture: `https://randomuser.me/api/portraits/women/1.jpg`,
      },
      {
        username: "paul",
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
        picture: `https://randomuser.me/api/portraits/women/2.jpg`,
      },
      {
        username: "max",
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
        picture: `https://randomuser.me/api/portraits/women/3.jpg`,
      },
      {
        username: "bob",
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
        picture: `https://randomuser.me/api/portraits/women/4.jpg`,
      },
      {
        username: "egoing",
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
        picture: `https://randomuser.me/api/portraits/women/5.jpg`,
      },
      {
        username: "king",
        password: 1234,
        createdAt: new Date(),
        updatedAt: new Date(),
        picture: `https://randomuser.me/api/portraits/women/6.jpg`,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
