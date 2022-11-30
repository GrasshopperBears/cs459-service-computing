import React from "react";

const ParcelItem = ({ item, date, status }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        borderRadius: 12,
        border: "1px solid var(--border)",
        padding: 14,
        columnGap: 14,
        cursor: "pointer",
      }}
    >
      <div style={{ flex: "1", fontSize: 16, fontWeight: 600 }}>{item}</div>
      <div style={{ flex: "1", fontSize: 12, color: "var(--text-gray)" }}>
        {date} <br />
        {status}
      </div>
    </div>
  );
};
export default ParcelItem;
