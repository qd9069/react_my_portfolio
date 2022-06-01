import React from "react";
import Navigation from "./Navigation";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
import Grid from "@mui/material/Grid";

export default function Header({ currentPage, handlePageChange }) {
  //------------------ if using Tabs style ----------------------------
  // const [value, setValue] = React.useState('AboutMe');

  // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
  //   setValue(newValue);
  // };

  // return (
  //   <Box sx={{ width: '100%' }}>
  //     <Tabs
  //       value={currentPage}
  //       onChange={handlePageChange}
  //       textColor="secondary"
  //       indicatorColor="secondary"
  //       aria-label="secondary tabs example"
  //     >
  //       <Tab value="AboutMe" label="AboutMe" href="#aboutMe" onClick={() => handlePageChange('AboutMe')}/>
  //       <Tab value="Portfolio" label="Portfolio" href="#portfolio" onClick={() => handlePageChange('Portfolio')}/>
  //       <Tab value="Contact" label="Contact" href="#contact" onClick={() => handlePageChange('Contact')}/>
  //       <Tab value="Resume" label="Resume" href="#Resume" onClick={() => handlePageChange('Resume')}/>
  //     </Tabs>
  //   </Box>
  // );
  // --------------------------------------------------------------

  // bg color options: #7BDFF2/ #B1EDE8
  // ----------- using app bar style ------------------------------
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ background: "#18BC9C", padding: "30px 1px" }}
        sx={{ width: "100vw" }}
      >
        <Container>
          <Toolbar>
            <Grid
              container
              spacing={1}
              alignItems="center"
              // sx={{
              //   display: "flex",
              //   justifyContent: "space-between",
              //   width: "100%",
              // }}
            >
              {/* Name */}
              <Grid md={4}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{ flexGrow: 1, color: "white", fontSize: "2" }}
                >
                  Qiling Deng
                </Typography>
              </Grid>
              <Grid md={8}>
                <Navigation
                  link="#aboutMe"
                  page="AboutMe"
                  onClick={() => handlePageChange("AboutMe")}
                  status={currentPage === "AboutMe" ? "primary" : "inherit"}
                />
                <Navigation
                  link="#portfolio"
                  page="Portfolio"
                  onClick={() => handlePageChange("Portfolio")}
                  status={currentPage === "Portfolio" ? "primary" : "inherit"}
                />
                <Navigation
                  link="#contact"
                  page="Contact"
                  onClick={() => handlePageChange("Contact")}
                  status={currentPage === "Contact" ? "primary" : "inherit"}
                />
                <Navigation
                  link="#resume"
                  page="Resume"
                  onClick={() => handlePageChange("Resume")}
                  status={currentPage === "Resume" ? "primary" : "inherit"}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
