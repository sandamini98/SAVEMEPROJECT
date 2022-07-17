import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

const Auth = () => {
    return (
        <div>
           <form>
             <Box>
                <Typography>Login</Typography>
                <TextField/>
                <TextField/>
                <TextField/>
                <Button>Submit</Button>
                <Button>Change To Signup</Button>
             </Box>
           </form>
        </div>
    );
};

export default Auth;