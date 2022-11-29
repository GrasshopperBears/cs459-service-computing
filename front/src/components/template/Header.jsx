import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        position: "fixed",

        left: 0,
        top: 0,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        width: "100%",
        height: 64,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 20px",
          boxSizing: "border-box",
          width: "min(430px, 100% - 40px)",
          columnGap: 20,
        }}
      >
        <div
          style={{
            color: "var(--white-80)",
            fontWeight: "800",
            fontStyle: "italic",
            fontSize: 24,
            marginBottom: 5,
          }}
        >
          mv=p
        </div>
      </div>
    </div>
  );
};

export default Header;
