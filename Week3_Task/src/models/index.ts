
'use strict';
import fs from 'fs';
import path from 'path';
import process from 'process';
import { ModelStatic } from 'sequelize';
import { Sequelize } from 'sequelize/types/sequelize';
import { User } from './user';
import { Room } from './room';
import { Message } from './message';
import { Participant } from './participant';
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];



let sequelize:Sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable!]! as string, config);
} else {
  sequelize = new Sequelize(config.database as string, config.username as string, config.password as string, config);
}

const db: {
  [key: string]:any,
  sequelize?: Sequelize;
  Sequelize?: typeof Sequelize;
} = {};
 

User.initModel(sequelize);
Room.initModel(sequelize);
Message.initModel(sequelize);
Participant.initModel(sequelize);

db.User = User;
db.Room = Room;
db.Message = Message;
db.Participant = Participant;


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;
export default db;
