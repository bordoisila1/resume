import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './components/HomePage';
import NavBar from './components/HeaderComponent/NavBar';
import Footer from './components/FooterComponent/Footer';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <NavBar />
                <Route name="homePage" exact path="/" component={HomePage} />
                <Footer/>
            </div>
        </Router>
    );
  }
}

export default App;
