import React, { Component } from 'react';
import {TopNavBar} from './TopNavBar'

import nba from 'nba';
window.nba = nba;
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar/>

        <p className = "App-intro">
            Edit<code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
