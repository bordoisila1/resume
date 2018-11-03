import React from 'react'
import {Home, Interests, About, Contact, Articles} from '../components'
import interests from './interests'

export const navRoutes = [
    {
        path: "/",
        exact: true,
        label: "Home",
        component: Home
    },
    {
        path: "/about-me",
        exact: false,
        label: "About me",
        component: About
    },
    {
        path: "/interests",
        exact: false,
        label: "Interests",
        component: Interests
    },
    {
        path: "/contact-me",
        exact: false,
        label: "Contact me",
        component: Contact
    },
    {
        path: "/articles",
        exact: false,
        label: "Articles",
        component: Articles,
        articles: interests
    }
];