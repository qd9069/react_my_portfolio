import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Container from '@mui/material/Container';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

export default function NavTabs(props) {
  // bg color options: #7BDFF2/ #B1EDE8
  // ----------- using app bar style ------------------------------
  return (
    <div>
      {/* Links */}
      <Box sx={{ display: "flex", marginRight: "1%" }}>
        <Button
          color="inherit"
          size="large"
          href={props.link}
          onClick={props.onClick}
          component="a"
          noWrap
          sx={{
            color: "white",
            fontSize: "130%",
            textTransform: "capitalize",
            px: "1rem",
          }}
        >
          {props.page}
        </Button>
      </Box>
    </div>
  );
}
