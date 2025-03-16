import React from "react";

export const Loading = () => {
  return (
    <div className="flex gap-1.5">
      <div
        className="w-2 h-2 rounded-full bg-secondary-400 animate-bounce"
        style={{ animationDelay: "0ms" }}
      />
      <div
        className="w-2 h-2 rounded-full bg-secondary-400 animate-bounce"
        style={{ animationDelay: "150ms" }}
      />
      <div
        className="w-2 h-2 rounded-full bg-secondary-400 animate-bounce"
        style={{ animationDelay: "300ms" }}
      />
    </div>
  );
};
