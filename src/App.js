import React, { Component } from 'react';
import HomePage from './components/HomePage';
import NavBar from './components/HeaderComponent/NavBar';
import Footer from './components/FooterComponent/Footer';

class App extends Component {
  render() {
    return (
        <div>
            <NavBar/>
            <HomePage/>
            <Footer/>
        </div>
    );
  }
}

export default App;
