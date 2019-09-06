import React, { Component } from 'react';
import './App.css';
import { Navbar } from './layout/Navbar'
import { Routing } from '../src/Route/Routing';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}
}
export default App;
