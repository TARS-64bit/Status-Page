// Example: 20250202161133-add-incident-name-column.js

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Incidents', 'incidentName', {
      type: Sequelize.STRING,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Incidents', 'incidentName');
  },
};
