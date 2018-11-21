import React from "react";
import { Route, Switch } from "react-router-dom";
import {navRoutes} from "../../lib/routes";
import {NoMatch} from './NoMatch'
import StickyNav from './StickyNav'
import Footer from './Footer'
import '../../styles/basePage.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            defaultBodyPaddingTop: 110,
        }
    }

    componentDidMount() {
        new Promise((resolve, reject) => {}).then(
            this.setState({
                navbarContainer:document.querySelector('.basepage__nav__container')
            })
        )
    }

    render() {
        return (
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
        )
    }
}

export default HomePage;