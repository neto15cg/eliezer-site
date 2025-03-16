import {
  MessageType,
  ChatResponseType,
} from "@/components/sections/sections.types";
import { useState, useRef, useEffect } from "react";

const STORAGE_KEY = "chat_conversation_id";

export const useChatMessages = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current) {
      hasInitialized.current = true;
      const savedConversationId = localStorage.getItem(STORAGE_KEY);
      if (savedConversationId) {
        setConversationId(savedConversationId);
        fetchConversationMessages(savedConversationId);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchConversationMessages = async (conversationId: string) => {
    setIsFetching(true);
    try {
      const response = await fetch(
        `/api/messages/conversation/${conversationId}`
      );
      if (response.ok) {
        const data = await response.json();
        const formattedMessages = formatMessages(data);
        setMessages(formattedMessages);
      }
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    } finally {
      setIsFetching(false);
    }
  };

  const formatMessages = (data: ChatResponseType[]) => {
    const formattedMessages: MessageType[] = [];
    data.forEach((item) => {
      formattedMessages.push({
        id: `${item.id}-user`,
        message: item.message,
        created_at: new Date(item.created_at).toLocaleString(),
        sender: "user",
        conversation_id: item.conversation_id,
      });

      formattedMessages.push({
        id: item.id,
        message: item.response,
        created_at: new Date(item.created_at).toLocaleString(),
        sender: "system",
        conversation_id: item.conversation_id,
      });
    });
    return formattedMessages;
  };

  const sendMessage = async (message: string) => {
    setIsSending(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          conversation_id: conversationId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const newConversationId = data[0]?.conversation_id;

        if (!conversationId && newConversationId) {
          setConversationId(newConversationId);
          localStorage.setItem(STORAGE_KEY, newConversationId);
        }

        const formattedMessages = formatMessages(data);
        setMessages(formattedMessages);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setIsSending(false);
    }
  };

  return {
    messages,
    isFetching,
    isSending,
    sendMessage,
  };
};
