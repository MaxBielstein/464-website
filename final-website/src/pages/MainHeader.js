import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function MainHeader() {
  return (
    <AppBar position="static">
      <Toolbar className="main-header-container">
        <Typography variant="h6" className="name-header">Max Bielstein</Typography>
        <div className="flex-div">
          <Button component={Link} to="/about" className="flex-item">Home Page</Button>
          <Button component={Link} to="/contact" className="flex-item">Contact Page</Button>
          <Button component={Link} to="/resume" className="flex-item">Resume Page</Button>
          <Button component={Link} to="/projects" className="flex-item">Projects Page</Button>
          <Button component={Link} to="/skills" className="flex-item">Skills Page</Button>
          <Button component={Link} to="/links" className="flex-item">Links Page</Button>
          <Button component={Link} to="/hangman" className="flex-item">Hangman Page</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default MainHeader;