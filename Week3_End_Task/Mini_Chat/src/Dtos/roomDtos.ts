export interface RoomCreateParameters {
  name: string;
}

export interface RoomGetByParameter {
  id: number;
}

export interface RoomUpdateParameters {
  id: number;
  name: string;
}
