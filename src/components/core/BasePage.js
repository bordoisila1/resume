import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {navRoutes} from "../../lib/routes";
import '../../styles/basePage.css'
import {NoMatch} from './NoMatch'

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
                        //Creates a Route that takes a path and renders a React Element based on the props being passed
                        <Route key={index}
                               exact={route.exact}
                               path={route.path}
                               render={(props)=>
                                   React.createElement(route.component, {...props, ...route})}
                        />
                    ))}
                    <Route component={NoMatch} status={404}/>
                </Switch>
            </div>
        </>
    </Router>
);

export default HomePage;