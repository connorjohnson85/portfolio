import React from 'react';
import logo from './logo.svg';
import { AppBar, Box, Button, Divider, Grid, IconButton, Paper, Toolbar, Typography} from '@mui/material'
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

import './App.css';


function App() {
  return (
    <div className="App">
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Connor's Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
      <Box p={1}>
      <Box sx={{ display: 'flex' }}>
        <Box width={'100%'} marginRight={1}>
          <Paper style={{height: 'full', padding: 2}} elevation={3}>
            <Box py={2} px={1} width={'100%'}>
            <Box sx={{ display: 'flex' }}>
              <Box px={2} width={'100%'}>Professional Projects</Box>
            </Box>
            </Box>
            <Divider/>
          </Paper>
        </Box>
        <Box width={'100%'} marginLeft={1}>
          <Paper style={{height: 'full', padding: 2}} elevation={3}>
            <Box py={2} px={1} width={'100%'}>
            <Box sx={{ display: 'flex' }}>
              <Box px={2} width={'100%'}>Projects For Fun</Box>
            </Box>
            </Box>
            <Divider/>
          </Paper>
        </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
