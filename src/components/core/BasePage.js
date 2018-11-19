import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {navRoutes} from "../../lib/routes";
import '../../styles/basePage.css'
import {NoMatch} from './NoMatch'
import StickyNav from './StickyNav'
import Footer from './Footer'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultBodyPaddingTop: 110,
        }
    }

    componentDidMount() {
        new Promise((resolve, reject) => {

        }).then(
            this.setState({
                navbarContainer:document.querySelector('.basepage__nav__container'),
                footerContainer:document.querySelector('.basepage__footer__container')
            })
        )
        window.onwheel = this.hideFooter
    }

    hideFooter = (e) =>  {
        if(this.state.footerContainer && !this.state.footerContainer.className.includes('hide')) {
            this.state.footerContainer.classList.add('hide')
            setInterval(() => this.state.footerContainer.classList.remove('hide'), 3000)
        }
    }

    render() {
        return (
            <Router>
                <div>
                    <StickyNav navRoutes={navRoutes}/>
                    <div className="basepage__body__container" style={{
                        paddingTop: this.state.navbarContainer ?
                            this.state.navbarContainer.clientHeight :
                            this.state.defaultBodyPaddingTop}}>
                        <Switch>
                            {navRoutes.map((route, index) => (
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
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default HomePage;