import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import RedditIcon from '@mui/icons-material/Reddit';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    // <Box sx={{ width: 500 }}>
    <Box maxWidth="lg" borderRadius= '16px' >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} href={`https://github.com/qd9069`} />
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} href={`https://www.linkedin.com/in/qiling-deng-ed20/`} />
        <BottomNavigationAction label="Reddit" icon={<RedditIcon />} href={``} />
      </BottomNavigation>
    </Box>
  );
}