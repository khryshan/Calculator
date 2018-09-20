import React, { Component } from 'react';
import Calculator from './Calculator/Calculator';
import History from './History';

class Application extends Component {
  render() {
    return (
      <div className="d-flex flex-row app">
      	<Calculator />
      	<History /> 
      </div>
    );
  }
}

export default Application;
