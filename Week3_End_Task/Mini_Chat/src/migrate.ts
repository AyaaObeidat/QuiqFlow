import umzug from './config/umzug';

const runMigrations = async () => {
  try {
    await umzug.up();
    console.log('Migration Completed ...');
  } catch (error) {
    console.log('Migration Faild :  ' + error);
  }
};

runMigrations();
