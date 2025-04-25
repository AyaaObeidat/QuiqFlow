import DataBase from './database';
import { SequelizeStorage, Umzug } from 'umzug';

const sequelize = DataBase.getDb_Instance();
const umzug = new Umzug({
  migrations: {
    glob: 'src/migrations/*.ts',
  },
  context: sequelize,
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});

const undoAllMigrations = async () => {
  try {
    await umzug.down({ to: 0 });
    console.log('all migrations Reverted... ');
  } catch (error) {
    console.log('migrations Reverted faild : ' + error);
  }
};
undoAllMigrations();
export default umzug;
