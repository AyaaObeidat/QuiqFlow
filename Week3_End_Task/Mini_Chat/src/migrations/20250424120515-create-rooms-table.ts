import { DataTypes, Sequelize } from 'sequelize';
export const up = async ({ context }: { context: Sequelize }) => {
  const queryInterface = context.getQueryInterface();
  await queryInterface.createTable('Rooms', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  });
};

export const down = async ({ context }: { context: Sequelize }) => {
  const queryInterface = context.getQueryInterface();
  await queryInterface.dropTable('Rooms');
};
