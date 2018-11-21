import React from 'react'
import '../../styles/news.css'
import FlagsBanner from './FlagsBanner'
import NewsList from "./NewsList";
import { Route, Link, Switch } from "react-router-dom";

class News extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('Rendering News')

        return (
            <div>
                <FlagsBanner countries={this.props.countries}
                             handleFlagClick={this.props.handleFlagClick}
                             currentCountry={this.props.currentCountry}/>
                <NewsList newsItems={this.props.newsItems}/>
                />
            </div>
        )
    }
}

export default News