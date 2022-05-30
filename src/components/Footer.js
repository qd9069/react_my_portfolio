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
    <Box maxWidth="lg">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
        <BottomNavigationAction label="Reddit" icon={<RedditIcon />} />
      </BottomNavigation>
    </Box>
  );
}