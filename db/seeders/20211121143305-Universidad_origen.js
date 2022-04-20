'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Universidad_origen', [
      {
        codigo: 20,
        nombre_universidad: 'Universidad Tecnológica Nacional',
        localidad: 'Haedo',
        sigla: 'UTN',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        codigo: 21,
        nombre_universidad: 'Universidad de Buenos Aires',
        localidad: 'CABA',
        sigla: 'UBA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        codigo: 22,
        nombre_universidad: 'Universidad de la Matanza',
        localidad: 'San Justo',
        sigla: 'UNLaM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        codigo: 23,
        nombre_universidad: 'Universidad Nacional de San Martin',
        localidad: 'San Martin',
        sigla: 'UNSAM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        codigo: 24,
        nombre_universidad: 'Universidad Nacional de La Plata',
        localidad: 'San Martin',
        sigla: 'UNLP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        codigo: 25,
        nombre_universidad: 'Universidad de Buenos Aires',
        localidad: 'CABA',
        sigla: 'UBA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        codigo: 26,
        nombre_universidad: 'Universidad de Morón',
        localidad: 'Moron',
        sigla: 'UM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {},
};
