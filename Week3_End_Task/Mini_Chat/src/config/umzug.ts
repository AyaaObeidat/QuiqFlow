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

const undoAllMigrations = async (): Promise<void> => {
  try {
    await umzug.down({ to: 0 });
    console.log('All migrations have been reverted successfully.');
  } catch (error) {
    console.error('Failed to revert migrations:', error);
  }
};

undoAllMigrations();

export default umzug;
