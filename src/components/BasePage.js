import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {navRoutes} from "../lib/routes";
import '../styles/basePage.css'

const HomePage = () => (
    <Router>
        <>
            <div className="basepage container">
                <nav className="row">
                    <div className="col-push-12">
                        <div className="basepage__logo">
                        </div>
                    </div>
                    <div className="col-12 col-md-8 align-self-center basepage__nav-links container">
                        <ul className="row">
                            {navRoutes.map((route, index) => (
                                <li className="col text-center">
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
                    <div className="d-none d-md-block">
                        <div className="basepage__nav_right">
                        </div>
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
        </>
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