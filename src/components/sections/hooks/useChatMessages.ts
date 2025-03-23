import {
  MessageType,
  ChatResponseType,
} from "@/components/sections/sections.types";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { chatApi } from "@/api/api";

const STORAGE_KEY = "chat_conversation_id";

export const useChatMessages = () => {
  const { t } = useTranslation();
  const initialGreetings: MessageType = {
    id: "initial-greeting",
    message: t("chat.initialGreeting"),
    created_at: new Date().toLocaleString(),
    sender: "system",
    conversation_id: undefined,
  };

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
      } else {
        // Add initial greeting message
        setMessages([initialGreetings]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchConversationMessages = async (conversationId: string) => {
    setIsFetching(true);
    try {
      const data = await chatApi.getConversationMessages(conversationId);
      const formattedMessages = formatMessages(data);
      setMessages([initialGreetings, ...formattedMessages]);
    } catch {
      toast.error(t("chat.errorFetch"));
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
      const data = await chatApi.sendMessage(message, conversationId);
      const newConversationId = data[0]?.conversation_id;

      if (!conversationId && newConversationId) {
        setConversationId(newConversationId);
        localStorage.setItem(STORAGE_KEY, newConversationId);
      }

      const formattedMessages = formatMessages(data);
      setMessages([initialGreetings, ...formattedMessages]);
      return true;
    } catch {
      toast.error(t("chat.errorSend"));
      return false;
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
