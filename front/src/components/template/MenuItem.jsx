import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const MenuItem = ({ title }) => {
  const [isHover, setHover] = useState(false);
  const getTitle = () => {
    if (title === "delivery") return "Delivery Man";
    return title.charAt(0).toUpperCase() + title.slice(1);
  };
  const selected = useLocation().pathname.includes(title);
  return (
    <div
      style={{
        padding: "0 24px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          padding: "11px 0",
          borderBottom: "1px solid var(--border-dark)",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div
          style={{
            fontSize: 14,
            fontWeight: 500,
            color: selected
              ? "var(--blue-dark)"
              : isHover
              ? "var(--white)"
              : "var(--white-80)",
            transition: "color 0.15s",
          }}
        >
          {getTitle()}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
