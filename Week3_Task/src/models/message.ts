import { DataTypes, Model, Optional, Sequelize } from "sequelize";
interface MessageAttributes{
  id:number,
  title:string,
  content:string,
  userId:number,
  roomId:number,
  createAt?:Date,
  updateAt?:Date
}

interface MessageCreationAttributes extends Optional<MessageAttributes,'id'>{}
export class Message extends Model<MessageAttributes,MessageCreationAttributes> implements MessageAttributes{
  id!:number;
  title!: string;
  content!: string;
  userId!: number;
  roomId!: number;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;

  public static associate(models:any){
    Message.belongsTo(models.User, { foreignKey: 'userId' });
    Message.belongsTo(models.Room, { foreignKey: 'roomId' });
  }

  public static initModel(sequelize:Sequelize){
    Message.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      roomId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
  {
    sequelize,
        modelName: 'Message',
        tableName: 'Messages',
        timestamps: true,
  });
}
}