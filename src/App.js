import React, { Component } from 'react';
import HomePage from './components/BasePage';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
//import './styles/styles.css'

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <HomePage/>
            </div>
        </Router>
    );
  }
}

export default App;
