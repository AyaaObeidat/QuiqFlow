export interface MessageCreateParameters{
  content: string;
  userId: number;
  roomId: number;
}

export interface MessageGetByParameter{
    id:number;
}

export interface MessageUpdateParameters{
    id:number;
    content:string;
}