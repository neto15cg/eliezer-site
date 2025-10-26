"use client";
import React, { useRef, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Section } from "./components/section";
import { Loading } from "../loading";
import { useChatMessages } from "./hooks/useChatMessages";
import { MessageType } from "./sections.types";

const TypingCursor = () => (
  <span className="inline-block w-[2px] h-5 bg-[#fbbf24] ml-1 animate-[blink_1s_ease-in-out_infinite]" />
);

const TypingMessage = ({ message }: { message: string }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const words = message.split(" ");
    let currentWordIndex = 0;
    
    setDisplayedText("");
    
    const typingInterval = setInterval(() => {
      if (currentWordIndex < words.length) {
        const textToDisplay = words.slice(0, currentWordIndex + 1).join(" ");
        setDisplayedText(textToDisplay);
        currentWordIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [message]);

  return (
    <>
      {displayedText}
      {displayedText.split(" ").length < message.split(" ").length && <TypingCursor />}
    </>
  );
};

export const Chat = () => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const { messages, isFetching, isSending, sendMessage } = useChatMessages();
  const [typingMessages, setTypingMessages] = useState<Set<string>>(new Set());
  const processedMessagesRef = useRef<Set<string>>(new Set());
  const isFirstRenderRef = useRef(true);

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

    handleScrollToBottom();
    const result = await sendMessage(currentMessage);
    if (result) {
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  useEffect(() => {
    handleScrollToBottom();
  }, [messages, isSending]);

  useEffect(() => {
    if (isFetching) return;

    if (isFirstRenderRef.current && messages.length > 0) {
      messages.forEach((msg) => processedMessagesRef.current.add(msg.id));
      isFirstRenderRef.current = false;
      return;
    }

    const newBotMessages = messages.filter(
      (msg) => msg.sender === "system" && !processedMessagesRef.current.has(msg.id)
    );

    if (newBotMessages.length === 0) return;

    newBotMessages.forEach((msg) => {
      processedMessagesRef.current.add(msg.id);
      
      setTypingMessages((prev) => {
        const newSet = new Set(prev);
        newSet.add(msg.id);
        return newSet;
      });
      
      const wordCount = msg.message.split(" ").length;
      const typingDuration = wordCount * 100 + 500;
      
      setTimeout(() => {
        setTypingMessages((prev) => {
          const newSet = new Set(prev);
          newSet.delete(msg.id);
          return newSet;
        });
      }, typingDuration);
    });
  }, [messages, isFetching]);

  if (isFetching) {
    return (
      <Section title={t("chat.title")}>
        <div className="flex justify-center items-center h-[500px]">
          <div className="animate-pulse text-secondary-500">
            <Loading />
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="chat" title={t("chat.title")}>
      <div className="flex flex-col gap-4">
        <div className="text-center text-sm text-secondary-400 mb-2 font-medium">
          {t("chat.poweredBy")}
        </div>
        <div
          ref={messagesContainerRef}
          className="flex flex-col gap-4 h-[600px] overflow-y-auto p-6 rounded-2xl bg-gradient-to-br from-base-950 via-base-900 to-base-950 border border-secondary-500/30 shadow-xl"
        >
          {messages.length === 0 ? (
            <div className="text-center text-secondary-400 flex flex-col items-center justify-center h-full gap-2">
              <div className="text-4xl mb-2">💬</div>
              <p className="text-lg font-medium">{t("chat.noMessages")}</p>
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
                    className={`max-w-[80%] p-4 rounded-2xl transition-all duration-300 ${
                      msg.sender === "user"
                        ? "bg-gradient-to-br from-secondary-500 to-secondary-600 text-white hover:shadow-xl hover:shadow-secondary-500/50"
                        : "bg-base-800/60 backdrop-blur-sm border border-secondary-500/20 text-secondary-100 hover:shadow-xl hover:border-secondary-400/30"
                    }`}
                  >
                    <p className="break-words overflow-wrap-anywhere whitespace-pre-wrap leading-relaxed">
                      {msg.sender === "system" && typingMessages.has(msg.id) ? (
                        <TypingMessage key={`typing-${msg.id}`} message={msg.message} />
                      ) : (
                        msg.message
                      )}
                    </p>
                    <span className="text-xs opacity-50 mt-2 block">
                      {msg.created_at}
                    </span>
                  </div>
                </div>
              ))}
              {isSending && (
                <div className="flex justify-start">
                  <div className="bg-base-800/60 backdrop-blur-sm border border-secondary-500/20 text-secondary-100 max-w-[80%] p-4 rounded-2xl flex items-center gap-3">
                    <Loading />
                    <span className="text-sm text-secondary-400">{t("chat.thinking")}</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              placeholder={
                isSending
                  ? t("chat.sendingMessage")
                  : t("chat.inputPlaceholder")
              }
              disabled={isSending}
              className={`flex-1 px-5 py-3 rounded-xl bg-base-800/60 backdrop-blur-sm text-white border border-secondary-500/30 focus:outline-none focus:border-secondary-400 focus:ring-2 focus:ring-secondary-500/30 transition-all duration-300 placeholder:text-base-400 ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            />
            <button
              type="submit"
              disabled={isSending}
              className="px-8 py-3 bg-gradient-to-r from-secondary-600 to-secondary-500 hover:from-secondary-500 hover:to-secondary-600 text-white rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer font-medium shadow-lg hover:shadow-xl hover:shadow-secondary-500/30"
            >
              {t("chat.sendButton")}
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};
