import React, { Component } from 'react';
import {Link} from '../router'

class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="headerButtons">
                    <Link val="/home" className="navButton">Home</Link>
                </ul>
            </header>
        )
    }
}
export default NavBar;