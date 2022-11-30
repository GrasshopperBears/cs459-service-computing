import React, { useState } from "react";
import Header from "./Header";
import Menu from "./Menu";

const Container = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div style={{ paddingTop: 119 }}>
      <Header setIsMenuOpen={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
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
