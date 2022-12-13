import React from "react";

const Notification = ({ notification }) => {
  // console.log(notification[0].description.replace(". ", "\n"));
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
      {!notification ? (
        <div
          style={{
            padding: "16px 0",
            fontSize: 14,
          }}
        >
          There are no notifications
        </div>
      ) : (
        notification.map((message, index) => (
          <div
            key={index}
            style={{
              padding: "16px 0",
              fontSize: 14,
              borderTop: index ? "1px solid var(--border)" : undefined,
              whiteSpace: "break-spaces",
            }}
          >
            {message.description.replace(". (", ".\n(")}
          </div>
        ))
      )}
    </div>
  );
};

export default Notification;
