import { DataTypes, Model, Optional } from 'sequelize';
import DataBase from '../config/database';
import Message from './message';
import Participant from './participants';
import User from './user';
interface RoomAttributes {
  id: number;
  name: string;
}
const sequelize = DataBase.getDb_Instance();
interface RoomCreationAttributes extends Optional<RoomAttributes, 'id'> {}
class Room extends Model<RoomAttributes, RoomCreationAttributes> implements RoomAttributes {
  id!: number;
  name!: string;

  static associate(models: {
    User: typeof User;
    Message: typeof Message;
    Participant: typeof Participant;
  }) {
    Room.hasMany(models.Message, {
      foreignKey: 'roomId',
      as: 'messages',
    });
    Room.belongsToMany(models.User, {
      through: models.Participant,
      foreignKey: 'roomId',
      as: 'users',
    });
  }

  static initModel() {
    Room.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Room',
        tableName: 'Rooms',
        timestamps: true,
      }
    );
  }
}
export default Room;
