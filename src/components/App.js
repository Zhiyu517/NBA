import React, { Component } from 'react';
import {TopNavBar} from './TopNavBar'
import {Main} from './Main'

import nba from 'nba';
window.nba = nba;
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar/>
        <Main/>
      </div>
    );
  }
}

export default App;
