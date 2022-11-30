import React from "react";
import Title from "../components/Title";

const BuyerScreen = () => {
  return (
    <>
      <Title title="Check you parcels." />
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
        <div style={{ flex: "1", fontSize: 16, fontWeight: 600 }}>Hoodie</div>
        <div style={{ flex: "1", fontSize: 12, color: "var(--text-gray)" }}>
          2022/11/14 <br />
          Departed from 경기도 성남
        </div>
      </div>
      <Title title="Notifications." />
    </>
  );
};

export default BuyerScreen;
