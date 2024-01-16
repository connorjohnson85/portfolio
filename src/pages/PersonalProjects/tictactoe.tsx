import React from 'react';
import logo from './logo.svg';
import { AppBar, Box, Button, Divider, Grid, IconButton, List, Paper, Toolbar, Typography} from '@mui/material'
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function TicTacToe() {
  return (
    <div className="App">
      <AppBar position="static" >
        <Toolbar>
          <Link to={'/'}>
            <ArrowBackIcon htmlColor='white'/>
          </Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Connor's Portfolio
          </Typography>

        </Toolbar>
      </AppBar>
      <Box p={2}>
        <Typography variant='h4'>
            Tic-Tac-Toe
        </Typography> 
      </Box>
      <Box p={2}>
        <Paper style={{height: 'full', padding: 2}}>

        </Paper>
      </Box>

    </div>
  );
}

export default TicTacToe;
