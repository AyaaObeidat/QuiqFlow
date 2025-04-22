import { Model, DataTypes, Optional, Sequelize } from 'sequelize';
interface ParticipantAttributes {
  id: number;
  userId: number;
  roomId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ParticipantCreationAttributes extends Optional<ParticipantAttributes, 'id'> {}

export class Participant extends Model<ParticipantAttributes, ParticipantCreationAttributes> implements ParticipantAttributes {
  public id!: number;
  public userId!: number;
  public roomId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associate(models: any) {
    Participant.belongsTo(models.User, { foreignKey: 'userId' });
    Participant.belongsTo(models.Room, { foreignKey: 'roomId' });
  }
  
  public static initModel(sequelize: Sequelize) {
    Participant.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        roomId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Participant',
        tableName: 'Participants',
        timestamps: true,
      }
    );
  }
}
