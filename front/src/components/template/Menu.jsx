import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Close } from "../../static/Close.svg";
import MenuItem from "./MenuItem";

const pathList = ["buyer", "seller", "company", "delivery"];

const Menu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <div
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.48)",
          opacity: isMenuOpen ? 1 : 0,
          pointerEvents: isMenuOpen ? "all" : "none",
          transition: "opacity 0.25s ease-out",
        }}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        style={{
          height: "100%",
          width: 256,
          backgroundColor: "black",
          position: "fixed",
          top: 0,
          left: isMenuOpen ? 0 : -256,
          transition: "left 0.25s ease-out",
        }}
      >
        <div
          style={{
            height: 64,
            display: "flex",
            alignItems: "center",
            columnGap: 20,
            borderBottom: "1px solid var(--border-dark)",
            marginBottom: 4,
          }}
        >
          <Close
            style={{ cursor: "pointer", marginLeft: 20 }}
            onClick={() => setIsMenuOpen(false)}
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
        {pathList.map((path) => (
          <Link key={path} to={`${path}`} onClick={() => setIsMenuOpen(false)}>
            <MenuItem title={path} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Menu;
