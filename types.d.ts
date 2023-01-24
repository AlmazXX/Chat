export interface Message {
  id: string;
  message: string;
  author: string;
  datetime: string;
}

export type MessageWithoutID = Omit<Message, "id">;

export interface MessageMutation {
  message: string;
  author: string;
}