import { DataTypes, Model, Optional } from 'sequelize';
import DataBase from '../config/database';

interface MessageAttributes {
  id: number;
  content: string;
  userId: number;
  roomId: number;
}
const sequelize = DataBase.getDb_Instance();
interface MessageCreationAttributes extends Optional<MessageAttributes, 'id'> {}
class Message
  extends Model<MessageAttributes, MessageCreationAttributes>
  implements MessageAttributes
{
  id!: number;
  content!: string;
  userId!: number;
  roomId!: number;

  static associate(models: any) {
    Message.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
    Message.belongsTo(models.Room, {
      foreignKey: 'roomId',
      as: 'room',
    });
  }

  static initModel() {
    Message.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        content: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'User',
            key: 'id',
          },
        },
        roomId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'Room',
            key: 'id',
          },
        },
      },
      {
        sequelize,
        modelName: 'Message',
        tableName: 'Messages',
        timestamps: true,
      }
    );
  }
}
export default Message;
