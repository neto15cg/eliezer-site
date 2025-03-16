export const mockMessages = [
  {
    id: "1",
    text: "Hi! How can I help you today?",
    timestamp: new Date("2024-01-10T10:00:00"),
    sender: "system",
  },
  {
    id: "2",
    text: "I'd like to know more about your experience with React",
    timestamp: new Date("2024-01-10T10:01:00"),
    sender: "user",
  },
  {
    id: "3",
    text: "I have 5+ years of experience with React, specializing in Next.js and modern React patterns. What specific aspects would you like to know about?",
    timestamp: new Date("2024-01-10T10:01:30"),
    sender: "system",
  },
] as const;
