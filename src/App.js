import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Login from './pages/login';
import Manage_application from './pages/manage_application.js';
import Cca_application from './pages/cca_application';
import { ChakraProvider } from '@chakra-ui/react';

class App extends Component {
  render() {
    return (
      <ChakraProvider>
        {/* <Login /> */}
        <Cca_application />
        {/* <Manage_application /> */}
      </ChakraProvider>
    );
  }
}

export default App;
