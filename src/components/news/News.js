import React from 'react';
import '../../styles/news.css';
import FlagsBanner from './FlagsBanner';
import NewsList from "./NewsList";
import request from "request";

class News extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor::News');
        let NEWS_API = (process.env.NODE_ENV !== 'production'
            ? 'http://localhost:5000'
            : 'https://www.nigoni-mw.appspot.com')
            + '/api/v1/news/';
        this.prefix = NEWS_API;
        console.log(process.env.NODE_ENV + ' *** ' + this.prefix)
        this.state = {};
        this.fetchCountryNews(this.prefix, props.currentCountry).then((data) => {
            this.setState({
                newsItems: JSON.parse(data)
            })
        })
    }

    fetchCountryNews(prefix, country) {
        console.log('fetchcountryNews::News')
        console.log('****Fetching for ' + country)
        return new Promise((resolve, reject) => {
            let options = {
                url: `${prefix}${country}`
            }
            request.get(options, (error, res, body) => {
                if (error) {
                    reject(error) // Rejects the Promise
                } else {
                    console.log("Serving news from the API")
                    resolve(body) // The JSON will be served to the then entry
                }
            })
        })
    }

    render() {
        console.log('render::News')
        return (
            <div>
                <FlagsBanner countries={this.props.countries}
                             handleFlagClick={this.props.handleFlagClick}
                             currentCountry={this.props.currentCountry}/>
                <NewsList newsItems={this.state.newsItems}/>
            </div>
        )
    }
}

export default News