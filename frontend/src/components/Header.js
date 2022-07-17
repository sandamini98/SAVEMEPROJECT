/*
import React, { useState } from 'react'
import { Link } from "react-router-dom";
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
        <Box display="flex" marginLeft={'auto'} marginRight="auto">
          <Tabs 
            textColor='inherit'
            value={value}
            onChange={(e,val)=>setValue(val)}
          >
            <Tab LinkComponent={Link} to="/blogs" label="All Blogs"/>
            <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs"/>
          </Tabs>
        </Box>
        <Box display="flex" marginLeft="auto">
            <Button 
                LinkComponent={Link} to="/auth"
                variant='contained' 
                sx={{margin:1,borderRadius:10}} 
                color="warning"
            >
                Login
            </Button>
            <Button
                LinkComponent={Link} to="/auth" 
                variant='contained' 
                sx={{margin:1,borderRadius:10}} 
                color="warning"
            >
                Signup
            </Button>
            <Button 
                LinkComponent={Link} to="/auth"
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
*/


import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setValue] = useState();
  return (
    <AppBar
      position="sticky"
      sx={{
        background:
          "#6ec23d ",
      }}
    >
      <Toolbar>
        <Typography  variant="h4">
          Save Me
        </Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft={"auto"} marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab
                
                LinkComponent={Link}
                to="/blogs"
                label="All Blogs"
              />
              <Tab
                
                LinkComponent={Link}
                to="/myBlogs"
                label="My Blogs"
              />
              <Tab
                
                LinkComponent={Link}
                to="/blogs/add"
                label="Add Blog"
              />
            </Tabs>
          </Box>
        )}
        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              {" "}
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Login
              </Button>
              <Button
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{ margin: 1, borderRadius: 10 }}
                color="warning"
              >
                Signup
              </Button>
            </>
          )}
          {isLoggedIn && (
            <Button
              
              LinkComponent={Link}
              to="/auth"
              variant="contained"
              sx={{ margin: 1, borderRadius: 10 }}
              color="warning"
            >
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;