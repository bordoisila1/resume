import React, { Component } from 'react';
import {Link} from '../router'

const Footer = () => {
    console.log("This is good")
    return (
        <div className='Footer'>
            <Link val='/'>Home</Link>
            <Link val='/profile'>My Profile</Link>
            <Link val='/contact'>Contact Me</Link>
        </div>
    )
}

export default Footer;