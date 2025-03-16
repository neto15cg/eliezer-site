"use client";
import React, { useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Section } from "./components/section";
import { Loading } from "../loading";
import { useChatMessages } from "./hooks/useChatMessages";
import { MessageType } from "./sections.types";

export const Chat = () => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const { messages, isFetching, isSending, sendMessage } = useChatMessages();

  const handleScrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentMessage = inputRef.current?.value || "";
    if (!currentMessage) return;

    if (inputRef.current) {
      inputRef.current.value = "";
    }
    handleScrollToBottom();
    await sendMessage(currentMessage);
  };

  useEffect(() => {
    handleScrollToBottom();
  }, [messages, isSending]);

  if (isFetching) {
    return (
      <Section title={t("chat.title")}>
        <div className="flex justify-center items-center h-[500px]">
          <div className="animate-pulse text-secondary-400">
            <Loading />
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section title={t("chat.title")}>
      <div className="flex flex-col gap-4">
        <div
          ref={messagesContainerRef}
          className="flex flex-col gap-4 h-[600px] overflow-y-auto p-4 rounded-lg bg-base-900"
        >
          {messages.length === 0 ? (
            <div className="text-center text-secondary-400">
              {t("chat.noMessages")}
            </div>
          ) : (
            <>
              {messages.map((msg: MessageType) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === "user"
                        ? "bg-secondary-600 text-secondary-50"
                        : "bg-base-800 text-secondary-100"
                    }`}
                  >
                    <p>{msg.message}</p>
                    <span className="text-xs opacity-50 mt-1 block">
                      {msg.created_at}
                    </span>
                  </div>
                </div>
              ))}
              {isSending && (
                <div className="flex justify-start">
                  <div className="bg-base-800 text-secondary-100 max-w-[80%] p-3 rounded-lg">
                    <Loading />
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <form onSubmit={handleSubmit} className="mt-2">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              placeholder={
                isSending
                  ? t("chat.sendingMessage")
                  : t("chat.inputPlaceholder")
              }
              disabled={isSending}
              className={`flex-1 px-4 py-2 rounded-lg bg-base-800 text-secondary-50 border border-secondary-700 focus:outline-none focus:border-secondary-500 transition-colors ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            />
            <button
              type="submit"
              disabled={isSending}
              className="px-6 py-2 bg-secondary-600 hover:bg-secondary-500 text-secondary-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {t("chat.sendButton")}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};
