export interface UserCreateParameters {
  name: string;
  email: string;
}

export interface UserGetByParameter {
  id: number;
}

export interface UserUpdateParameters {
  id: number;
  name: string;
  email: string;
}
