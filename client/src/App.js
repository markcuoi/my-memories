import React from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Auth } from './components/Auth/Auth';

const App = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/auth" exact element={<Auth />} />
      </Routes>
    </Container>
  );
};

export default App;
