import React from 'react'
import {Home, Interests, About, Contact, Articles} from '../components'
import articles from './articles'

export const navRoutes = [
    {
        path: "/news",
        exact: true,
        label: "Home",
        component: Home
    },
    {
        path: "/interests",
        exact: false,
        label: "Interests",
        component: Interests
    },
    {
        path: "/articles",
        exact: false,
        label: "Articles",
        component: Articles,
        articles: articles
    },
    {
        path: "/contact-me",
        exact: false,
        label: "Contact me",
        component: Contact
    }
];