import React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function AboutMe() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <Container maxWidth="lg"> */}
      <Container style={{ maxWidth: "lg", padding: "20px 5px" }} sx={{my: 7, mx: 9}}>
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <div>
          <h1>About Me</h1>
          <Avatar alt="Avatar" src="/images/avatar.png" sx={{ width: 100, height: 100 }} />
          <p>My name is Qiling Deng. I graduated from UC San Diego in 2014 with a bachelor of science degree in Joint Mathematics and Economics. 
            I have been working as a Regulatory Tax Analyst at H&R Block since 2017. 
            While I was working at H&R Block, I was involved in the development of their online tax return filing software products. 
            This gave me a valuable experience in software development and inspired me to learn web/software application programming. 
            Therefore, I have started a new journey in learning coding recently.</p>
            <p>Below are some of my projects, please feel free to reach out if you have any questions regarding my projects here.</p> 
        </div>
      </Container>
    </React.Fragment>
  );
}
