import React from 'react'
import '../../styles/news.css'
import FlagsBanner from './FlagsBanner'
import NewsList from "./NewsList";

class News extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('Rendering News')

        return (
            <div>
                {/*
                Flags Banner - Makes call to Countries
                A Single News Card List - Expandable with Read more directing to the actual Website
                */}
                <FlagsBanner countries={this.props.countries} handleFlagClick={this.props.handleFlagClick}/>
                <NewsList newsItems={this.props.newsItems}/>
            </div>
        )
    }
}

export default News