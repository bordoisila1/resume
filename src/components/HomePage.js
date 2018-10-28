import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Home, Interests, About, Contact} from '../components'
import {navRoutes} from "../lib/routes";

const HomePage = () => (
    <Router>
        <div className="parent_container">
            <div className="nav_bar">
                <ul>
                        {navRoutes.map((route, index) => (
                            <>
                                <li className="hvr-hang li_item">
                                <Link
                                    key={index}
                                    className=""
                                    to={route.path}
                                    component={route.component}>
                                    {route.label}
                                </Link>
                                </li>
                            </>
                        ))}
                </ul>
            </div>

            <hr />
            <div className="lower_container">
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