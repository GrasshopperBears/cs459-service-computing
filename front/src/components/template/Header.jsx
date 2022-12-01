import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Menu } from "../../static/Menu.svg";
import { ReactComponent as Back } from "../../static/Back.svg";

const Header = ({ setIsMenuOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[1];
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
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          columnGap: 20,
        }}
      >
        <Menu
          style={{ cursor: "pointer", position: "absolute", top: 20, left: 20 }}
          onClick={() => setIsMenuOpen(true)}
        />
        <div
          style={{
            color: "var(--white-80)",
            fontWeight: "900",
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
          padding: "0 24px",
          boxSizing: "border-box",
          borderBottom: "1px solid var(--border)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "var(--white-80)",
        }}
      >
        <div
          style={{
            fontSize: 21,
            fontWeight: 600,
            width: "min(382px, 100%)",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
          }}
        >
          {location.pathname.split("/").length > 2 && (
            <Back
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer", margin: "1px 8px 0 -4px" }}
            />
          )}
          {getTitle()}
        </div>
      </div>
    </div>
  );
};

export default Header;
