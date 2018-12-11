import React, { Component } from 'react';
import Contact from './components/Contact';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <div className="container">
          <Contact
            name="Jon Doe"
            email="jdoe@aaaa.lt"
            phone="555 555 55555"
          />
          <Contact
            name="Karen Smith"
            email="ksmith@aaaa.lt"
            phone="555 555 33333"
          />
        </div>
      </div>
    );
  }
}

export default App;
