import React from "react";

const DetailStatus = ({ messages }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--background-gray)",
        padding: "0 16px",
        borderRadius: 12,
        marginBottom: 16,
      }}
    >
      {!messages.length ? (
        <div
          style={{
            padding: "16px 0",
          }}
        >
          <div style={{ fontSize: 14 }}>배송 출발 전</div>
        </div>
      ) : (
        messages.map((message, index) => (
          <div
            key={index}
            style={{
              padding: "16px 0",
              borderTop: index ? "1px solid var(--border)" : undefined,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontSize: 14 }}>{message.location}</div>
            <div style={{ fontSize: 12, color: "var(--text-gray)" }}>
              {message.status}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
export default DetailStatus;
