import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    margin: "0 1rem",
    fontSize: "1.2rem",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#325d53",
        color: "white",
        padding: "1rem 2rem",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", gap: "1.5rem" }}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </div>

      <Tooltip title="Logout">
        <IconButton
          sx={{ color: "white" }}
          onClick={() => console.log("Logout clicked")}
        >
          <LogoutIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default Header;
