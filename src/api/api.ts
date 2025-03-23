import axios from "axios";
import { ChatResponseType } from "@/components/sections/sections.types";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "";

const api = axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const chatApi = {
  getConversationMessages: async (conversationId: string) => {
    const { data } = await api.get<ChatResponseType[]>(
      `/messages/conversation/${conversationId}`
    );
    return data;
  },

  sendMessage: async (message: string, conversationId: string | null) => {
    const { data } = await api.post<ChatResponseType[]>("/chat", {
      message,
      conversation_id: conversationId,
    });
    return data;
  },
};
