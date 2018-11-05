import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {navRoutes} from "../../lib/routes";
import '../../styles/basePage.css'
import {NoMatch} from './NoMatch'

class HomePage extends React.Component {
    addNavbar(e) {
        if(!this.state.navbarContainer) {
            console.log("Handling scroll")
            this.setState({navbarContainer:document.querySelector('.basepage__nav__container')})
        }
    }

    constructor(props) {
        super(props)
        this.state = {navbarContainer:document.querySelector('.basepage__nav__container')}
        this.addNavbar = this.addNavbar.bind(this)
        window.onwheel = this.handleScroll
    }

    render() {
        console.log("Inside render")
        return (
            <Router>
                <div>
                    <div className="basepage__nav__container container-fluid sticky">
                        <nav className="row basepage__nav">
                            <div className="col-push-12">
                                <div className="basepage__nav-logo">
                                </div>
                            </div>
                            <div className="col-12 col-md-8 align-self-center basepage__nav-links container">
                                <ul className="row">
                                    {navRoutes.map((route, index) => (
                                        <li key={index} className="col text-center">
                                            <Link
                                                key={index}
                                                to={route.path}
                                                component={`${route.component}`}>
                                                {route.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="d-none d-md-block">
                                <div className="basepage__nav-right">
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className="basepage__body__container" style={{paddingTop: this.state.navbarContainer ? this.state.navbarContainer: 100}}>
                        <Switch>
                            {navRoutes.map((route, index) => (
                                //Creates a Route that takes a path and renders a React Element based on the props being passed
                                <Route key={index}
                                       exact={route.exact}
                                       path={route.path}
                                       render={(props) =>
                                           React.createElement(route.component, {...props, ...route})}
                                />
                            ))}
                            <Route component={NoMatch} status={404}/>
                        </Switch>
                    </div>
                    <div className="basepage__footer_container">
                        THIS IS THE FOOTER
                    </div>
                </div>
            </Router>
        )
    }
}

export default HomePage;