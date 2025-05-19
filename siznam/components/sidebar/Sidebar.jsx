import React from "react";
import logo from "../../images/logo.svg";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import BadgeIcon from "@mui/icons-material/Badge";
import DraftsIcon from "@mui/icons-material/Drafts";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#cef866",
        color: "white",
        padding: "1rem",
        position: "fixed",
        top: 0,
        left: 0,
        overflowY: "auto",
        boxSizing: "border-box",
      }}
    >
      <div style={{ marginBottom: "2rem" }}>
        <img src={logo} alt="Siznam Logo" style={{ width: "100%" }} />
      </div>
      <Box sx={{ width: "100%", maxWidth: 360 }}>
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <Link
                to="/employee-record"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <BadgeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Employee Record" />
                </ListItemButton>
              </Link>
            </ListItem>

            <ListItem disablePadding>
              <Link
                to="/drafts"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "100%",
                }}
              >
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Drafts" />
                </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </nav>
      </Box>
    </div>
  );
};

export default Sidebar;
