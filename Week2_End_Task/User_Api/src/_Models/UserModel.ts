export enum UserRequestStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  userRequest: UserRequestStatus;
}

export const users: User[] = [
  {
    id: 1,
    name: 'Ayah Obeidat',
    email: 'ayah@gmail.com',
    password: 'ayah123!',
    userRequest: UserRequestStatus.APPROVED,
  },
  {
    id: 2,
    name: 'Ahmad Obeidat',
    email: 'ahmad@gmail.com',
    password: 'ah_123',
    userRequest: UserRequestStatus.APPROVED,
  },
  {
    id: 3,
    name: 'Tabark Matalgeh',
    email: 'taMa@gmail.com',
    password: 'ta_m!123',
    userRequest: UserRequestStatus.PENDING,
  },
];
