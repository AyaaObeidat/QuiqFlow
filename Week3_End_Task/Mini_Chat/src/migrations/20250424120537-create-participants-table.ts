import { DataTypes, Sequelize } from 'sequelize';
export const up = async ({ context }: { context: Sequelize }) => {
  const queryInterface = context.getQueryInterface();
  await queryInterface.createTable('Participants', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Rooms',
        key: 'id',
      },
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
  await queryInterface.dropTable('Participants');
};
