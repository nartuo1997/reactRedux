import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react';

import Register from './Component/Register/Register'
import Person from './Component/Person/Person';
import PersonCard from './Container/PersonCard';
class App extends Component {
  render() {
    return (
      <div>
        <Register />
        <PersonCard></PersonCard>
      </div>

    )
  }

}

export default App;
