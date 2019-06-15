import React, { Component } from 'react';
import CountryTable from "./CountryTable";
import './App.css';
import CountryFactory from './countryFactory';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h2>React, State, Fetch and Mobx</h2>
        </div>
        <div className="App-intro">
          <CountryTable factory={CountryFactory} />
        </div>
      </div>
    );
  }
}

export default App;
