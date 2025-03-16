export interface MessageType {
  id: string;
  message: string;
  created_at: string;
  sender: "user" | "system";
  conversation_id?: string;
  originalMessage?: string;
}

export interface ChatPayloadType {
  message: string;
  conversation_id?: string;
}

export interface ChatResponseType {
  id: string;
  message: string;
  response: string;
  created_at: string;
  conversation_id?: string;
}
