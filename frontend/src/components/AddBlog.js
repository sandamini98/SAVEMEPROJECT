import { Box, InputLabel, TextField, Typography } from '@mui/material';
import React from 'react'

const AddBlog = () => {
  return <div>
      <form >
        <Box>
          <Typography>Post Your Blog</Typography>
          <InputLabel>Title</InputLabel>
          <TextField/>
          <InputLabel>Description</InputLabel>
          <TextField/>
          <InputLabel>ImageURL</InputLabel>
          <TextField/>
        </Box>
      </form>
  </div>;
};

export default AddBlog;