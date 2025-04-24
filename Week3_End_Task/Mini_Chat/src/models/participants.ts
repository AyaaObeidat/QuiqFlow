import { DataTypes, Model, Optional } from 'sequelize';
import DataBase from '../config/database';

interface ParticipantAttributes {
  id: number;
  userId: number;
  roomId: number;
}
const sequelize = DataBase.getDb_Instance();
interface ParticipantCreationAttributes extends Optional<ParticipantAttributes, 'id'> {}
class Participant
  extends Model<ParticipantAttributes, ParticipantCreationAttributes>
  implements ParticipantAttributes
{
  id!: number;
  userId!: number;
  roomId!: number;

  static initModel() {
    Participant.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
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
        modelName: 'Participant',
        tableName: 'Participants',
        timestamps: true,
      }
    );
  }
}
export default Participant;
