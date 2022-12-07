import React from "react";

const Notification = ({ messages }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--background-gray)",
        padding: "0 16px",
        borderRadius: 12,
      }}
    >
      {messages.map((message, index) => (
        <div
          key={index}
          style={{
            padding: "16px 0",
            fontSize: 14,
            borderTop: index ? "1px solid var(--border)" : undefined,
          }}
        >
          {message}
        </div>
      ))}
    </div>
  );
};

export default Notification;
