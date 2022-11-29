import React from "react";
import Header from "./Header";

const Container = ({ children }) => {
  return (
    <div style={{ paddingTop: 64 }}>
      <Header />
      {children}
    </div>
  );
};

export default Container;
