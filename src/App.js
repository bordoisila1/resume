import React, { Component } from 'react';
import HomePage from './components/BasePage';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import Spinner from 'react-spinkit'

class App extends Component {

    state = {
        loading: true
    };

    componentDidMount() {
        // the setTimeout just simulates an async action, after which the component will render the content
        setTimeout(() => this.setState({ loading: false }), 1500);
    }
    
    render() {
        const { loading } = this.state;

        if(loading) { // if your component doesn't have to wait for an async action, remove this block
            return <Spinner className="loading" name="ball-zig-zag" color="red"/>
        }

        return (
            <Router>
                <div className="base">
                    <HomePage/>
             </div>
         </Router>
     );
    }
}

export default App;
