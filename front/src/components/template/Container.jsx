import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";

const Container = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <div style={{ paddingTop: 119 }}>
      <Header setMenuOpen={setMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
      <div
        style={{
          padding: "0 20px 24px",
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
