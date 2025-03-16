import React, { useState, useEffect } from "react";
import { Section } from "./components/section";
import { mockMessages } from "@/app/mocks/chat-history";
import { Loading } from "../loading";

type Message = {
  id: string;
  text: string;
  timestamp: Date;
  sender: "user" | "system";
};

export const Chat = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setMessages(mockMessages as unknown as Message[]);
      setInitializing(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      timestamp: new Date(),
      sender: "user",
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    try {
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      if (response.ok) {
        const data = await response.json();
        const systemMessage: Message = {
          id: Date.now().toString(),
          text: data.reply || "Message received",
          timestamp: new Date(),
          sender: "system",
        };
        setMessages((prev) => [...prev, systemMessage]);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  if (initializing) {
    return (
      <Section title="Ask me anything">
        <div className="flex justify-center items-center h-[500px]">
          <div className="animate-pulse text-secondary-400">
            <Loading />
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4 h-[600px] overflow-y-auto p-4 rounded-lg bg-base-900">
          {messages.length === 0 ? (
            <div className="text-center text-secondary-400">
              No messages yet. Start a conversation!
            </div>
          ) : (
            <>
              {messages.map((msg) => (
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
                    <p>{msg.text}</p>
                    <span className="text-xs opacity-50 mt-1 block">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
              {loading && (
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
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                loading ? "Waiting for response..." : "Type your message..."
              }
              disabled={loading}
              className={`flex-1 px-4 py-2 rounded-lg bg-base-800 text-secondary-50 border border-secondary-700 focus:outline-none focus:border-secondary-500 transition-colors ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            />
            <button
              type="submit"
              disabled={loading || !message}
              className="px-6 py-2 bg-secondary-600 hover:bg-secondary-500 text-secondary-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </Section>
  );
};
