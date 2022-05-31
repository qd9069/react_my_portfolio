import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';

// ----------------------- bootstrap Example ---------------------
// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
// function NavTabs({ currentPage, handlePageChange }) {
//   return (
//     <ul className="nav nav-tabs">
//       <li className="nav-item">
//         <a
//           href="#aboutMe"
//           onClick={() => handlePageChange('AboutMe')}
//           // This is a conditional (ternary) operator that checks to see if the current page is "AboutMe"
//           // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
//           className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
//         >
//           About Me
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#portfolio"
//           onClick={() => handlePageChange('Portfolio')}
//           // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           Portfolio
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => handlePageChange('Contact')}
//           // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#Resume"
//           onClick={() => handlePageChange('Resume')}
//           // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//         >
//           Resume
//         </a>
//       </li>
//     </ul>
//   );
// }

// export default NavTabs;

export default function NavTabs({ currentPage, handlePageChange }) {
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

  // ----------- using app bar style ------------------------------
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" style={{ background: '#18BC9C', padding: "30px 1px" }} sx={{ height: '120px' }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white', fontSize: '250%'}}>
            Qiling Deng
          </Typography>
          <Button
            color="inherit"
            size="large"
            href={"#aboutMe"}
            onClick={() => handlePageChange("AboutMe")}
            component="a"
            noWrap
            sx={{ color: 'white', fontSize: '130%' }}
          >
            About Me
          </Button>
          <Button
            color="inherit"
            size="large"
            href={"#portfolio"}
            onClick={() => handlePageChange("Portfolio")}
            component="a"
            noWrap
            sx={{ color: 'white', fontSize: '130%' }}
          >
            Portfolio
          </Button>
          <Button
            color="inherit"
            size="large"
            href={"#contact"}
            onClick={() => handlePageChange("Contact")}
            component="a"
            noWrap
            sx={{ color: 'white', fontSize: '130%' }}
          >
            Contact
          </Button>
          <Button
            color="inherit"
            size="large"
            href={"#Resume"}
            onClick={() => handlePageChange("Resume")}
            component="a"
            noWrap
            sx={{ color: 'white', fontSize: '130%' }}
          >
            Resume
          </Button>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
