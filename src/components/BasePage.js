import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {navRoutes} from "../lib/routes";
import '../styles/homepage.css'

const HomePage = () => (
    <Router>
        <div className="base-container">
            <div className="base-container__nav-bar container">
                <nav className="row">
                    <div className="base-container__nav-bar--logo">
                    </div>
                    <div className="col">
                        <ul>
                            {navRoutes.map((route, index) => (
                                <li>
                                    <Link
                                        key={index}
                                        className=""
                                        to={route.path}
                                        component={route.component}>
                                        {route.label}
                                        </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
            <div>
                <Switch>
                    {navRoutes.map((route, index) => (
                        <Route key= {index} exact={route.exact} path={route.path} component={route.component} />
                    ))}
                    <Route component={NoMatch} status={404}/>
                </Switch>
            </div>
        </div>
    </Router>
);

const NoMatch = ({ location }) => (
    <div>
        <h3>
            Oops !! 404<code>{location.pathname}</code> not found
        </h3>
        <a href="">
            <img src="https://media.giphy.com/media/MdXXZh65YfC7e/giphy.gif"/>
        </a>
    </div>
);

export default HomePage;