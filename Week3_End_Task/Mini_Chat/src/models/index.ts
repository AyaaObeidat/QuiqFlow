import User from './user';
import Room from './room';
import Message from './message';
import Participant from './participants';

export function initializeModels() {
  User.initModel();
  Room.initModel();
  Message.initModel();
  Participant.initModel();

  User.associate({ Message, Room, Participant });
  Room.associate({ User, Message, Participant });
  Message.associate({ User, Room });
  Participant.associate({ User, Room });
}

export { User, Room, Message, Participant };
