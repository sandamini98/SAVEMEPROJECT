import React, { useState } from 'react'
import {AppBar, Toolbar, Typography, Box, Button,  Tabs, Tab} from '@mui/material'
const Header = () => {
    const [value, setValue] = useState();
    return (
    <AppBar 
      position="sticky" 
      sx={{background: "#6ec23d" 
      }}
    >
      <Toolbar>
        <Typography variant="h4">Save Me</Typography>
        <Box display="flex">
          <Tabs value={value} onChange={(e,val)=>setValue(val)}>
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
            <Button 
                variant='contained' 
                sx={{margin:1,borderRadius:10}} 
                color="warning"
            >
                Logout
            </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header