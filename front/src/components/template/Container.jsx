import React from "react";
import Header from "./Header";

const Container = ({ children }) => {
  return (
    <div style={{ paddingTop: 119 }}>
      <Header />
      <div
        style={{
          padding: "24px 20px",
          boxSizing: "border-box",
          width: "min(430px, 100%)",
          margin: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
