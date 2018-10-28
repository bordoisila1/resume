import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Home} from './Home'
import {About} from './About'
import {Interests} from "./Interests";

const HomePage = () => (
    <Router>
        <div className="parent_container">
            <div className="nav_bar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About-me</Link>
                    </li>
                    <li>
                        <Link to="/interests">Interests</Link>
                    </li>
                </ul>
            </div>

            <hr />
            <div className="lower_container">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/interests" component={Interests} />
            </div>
        </div>
    </Router>
);

export default HomePage;