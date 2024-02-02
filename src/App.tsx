import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import {  BrowserRouter, createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BorderStyle, Dashboard } from '@mui/icons-material';
import { Box, createTheme, Switch } from '@mui/material';
import ReactDOM from 'react-dom';
import TicTacToe from './pages/PersonalProjects/ticTacToe/tictactoe';
import DemoForm from './pages/ProfessionalProjects/DemoForm';


function App() {

  return (
    <Box>
      	<BrowserRouter>
        <Routes>
          <Route path="/Tictactoe" element={<TicTacToe />} />
          <Route path="/DemoForm" element={<DemoForm />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;