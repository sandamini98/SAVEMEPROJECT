import React from 'react'
import {AppBar, Toolbar, Typography, Box, Button,  Tabs, Tab} from '@mui/material'
const Header = () => {
    return (
    <AppBar 
      position="sticky" 
      sx={{background: "#6ec23d" 
      }}
    >
      <Toolbar>
        <Typography variant="h4">Save Me</Typography>
        <Box display="flex">
          <Tabs>
            <Tab label="All Blogs"/>
            <Tab label="My Blogs"/>
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
            <Button 
                variant='contained' 
                sx={{margin:1,borderRadius:10}} 
                color="warning"
            >
                Login
            </Button>
            <Button 
                variant='contained' 
                sx={{margin:1,borderRadius:10}} 
                color="warning"
            >
                Signup
            </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header