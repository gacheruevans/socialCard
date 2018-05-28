import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//imports components.
import StatelessCard from './components/cards/stateless-card';
import StatefulCard from './components/cards/stateful-card';

class App extends Component {
 
  render() {
    return (
      <div className="App">
      

        <StatefulCard />
      </div>
    );
  }
}

export default App;
