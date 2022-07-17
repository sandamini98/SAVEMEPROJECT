import React from 'react'
import {AppBar, Toolbar, Typography, Box, Button} from '@mui/material'
const Header = () => {
    return <AppBar>
      <Toolbar>
        <Typography variant="h4">Save Me</Typography>
        <Box>
            <Button color="warning">Login</Button>
            <Button color="warning">Signup</Button>
        </Box>
      </Toolbar>
  </AppBar>;
}

export default Header