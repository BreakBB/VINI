import React, { Component } from 'react';
import logo from './media/logo.png';
import { InfoTable, WebFrame } from './components';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Search from '@material-ui/icons/Search';

import './App.css';

class App extends Component {
  render() {
    return (
        <WebFrame>
          <div className="searchbar-container">
            <TextField
              id="search"
              label="FIN eingeben"
              type="search"
              margin="normal"
              className="searchbar"
            />
            <Button variant="raised" style= {{marginLeft: '10px'}}>
              <Search />
              Suche
            </Button>
          </div>
          <InfoTable />
          <img src={logo} className="App-logo" alt="logo" />
      </WebFrame>
    );
  }
}

export default App;
