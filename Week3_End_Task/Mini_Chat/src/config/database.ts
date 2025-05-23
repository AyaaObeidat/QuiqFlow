import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
dotenv.config();

class DataBase {
  private static db_instance: Sequelize;
  private constructor() {}

  public static getDb_Instance() {
    if (!DataBase.db_instance) {
      DataBase.db_instance = new Sequelize({
        username: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        dialect: 'postgres',
        logging: false,
      });
    }
    return DataBase.db_instance;
  }
}
export default DataBase;
