import sequelize from 'sequelize';
import { Model, DataTypes, Optional, Sequelize, Association } from 'sequelize';
interface UserAttributes{
  id:number;
  name:string;
  email:string;
  createAt?:Date;
  updateAt?:Date
};

interface UserCreationAttributes extends Optional<UserAttributes,'id'>{}
export class User extends Model<UserAttributes,UserCreationAttributes> implements UserAttributes{
  id!: number;
  name!: string;
  email!: string;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;

  public static associate(models:any){
    User.hasMany(models.Participant, { foreignKey: 'userId' });
    User.hasMany(models.Message, { foreignKey: 'userId' });
  }

  public static initModel(sequelize:Sequelize){
   User.init({
    id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey:true,
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false
    },
   },
  {
    sequelize,
    'modelName':'User',
    'tableName':'Users',
    'timestamps':true
  })
  }
}