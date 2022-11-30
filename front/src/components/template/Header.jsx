import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Menu } from "../../static/Menu.svg";

const Header = ({ setIsMenuOpen }) => {
  const path = useLocation().pathname.replace("/", "");
  const getTitle = () => {
    if (path === "delivery") return "Delivery Man";
    return path.charAt(0).toUpperCase() + path.slice(1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 0,
        width: "100%",
      }}
    >
      <div
        style={{
          height: 64,
          width: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          columnGap: 20,
        }}
      >
        <Menu
          style={{ cursor: "pointer", marginLeft: 20 }}
          onClick={() => setIsMenuOpen(true)}
        />
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
      <div
        style={{
          height: 55,
          padding: "12px 24px 13px",
          boxSizing: "border-box",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: 21,
            fontWeight: 600,
            width: "min(382px, 100%)",
            textAlign: "left",
          }}
        >
          {getTitle()}
        </div>
      </div>
    </div>
  );
};

export default Header;
