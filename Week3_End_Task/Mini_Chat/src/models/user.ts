import { DataTypes, Model, Optional } from 'sequelize';
import DataBase from '../config/database';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
}
const sequelize = DataBase.getDb_Instance();
interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  id!: number;
  name!: string;
  email!: string;

  static associate(models: any) {
    User.hasMany(models.Message, {
      foreignKey: 'userId',
      as: 'messages',
    });
    User.belongsToMany(models.Room, {
      through: models.Participant,
      foreignKey: 'userId',
      as: 'rooms',
    });
  }

  static initModel() {
    User.init(
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
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'Users',
        timestamps: true,
      }
    );
  }
}
export default User;
