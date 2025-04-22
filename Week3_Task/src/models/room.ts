import { Model, DataTypes, Optional, Sequelize } from 'sequelize';
interface RoomAttributes {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface RoomCreationAttributes extends Optional<RoomAttributes, 'id'> {}

export class Room extends Model<RoomAttributes, RoomCreationAttributes> implements RoomAttributes {
  public id!: number;
  public name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  
  public static associate(models: any) {
    Room.hasMany(models.Message, { foreignKey: 'roomId' });
    Room.hasMany(models.Participant, { foreignKey: 'roomId' });
  }

 
  public static initModel(sequelize: Sequelize) {
    Room.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
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
