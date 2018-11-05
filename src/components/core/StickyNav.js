import React from 'react'
import {Link} from "react-router-dom";

class StickyNav extends React.Component {
    constructor(props) {
        super(props)
        this.props = {...props}
    }

    render() {
        return(
            <div className="basepage__nav__container container-fluid sticky">
                <nav className="row basepage__nav">
                    <div className="col-push-12">
                        <div className="basepage__nav-logo">
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-6 align-self-center basepage__nav-links container">
                        <ul className="row">
                            {this.props.navRoutes.map((route, index) => (
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
        )
    }
}

export default StickyNav