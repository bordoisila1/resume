import React from 'react'
import '../../styles/news.css'
import FlagsBanner from './FlagsBanner'
import NewsList from "./NewsList";
import request from "request";

class News extends React.Component {
    constructor(props) {
        super(props)
        this.prefix = 'http://localhost:5000/api/v1/news/'
        this.state = {}
        this.fetchCountryNews(this.prefix, props.currentCountry).then((data) => {
            this.setState({
                newsItems: JSON.parse(data)
            })
        })
    }

    fetchCountryNews(prefix, country) {
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

    componentWillReceiveProps(nextProps) {
        this.fetchCountryNews(this.prefix, nextProps.currentCountry).then((data) => {
            this.setState({
                newsItems: JSON.parse(data)
            })
        })
    }

    render() {
        console.log('Rendering News for *** ' + this.props.currentCountry)
        return (
            <div>
                <FlagsBanner countries={this.props.countries}
                             handleFlagClick={this.props.handleFlagClick}
                             currentCountry={this.props.currentCountry}/>
                <NewsList newsItems={this.state.newsItems}/>
                />
            </div>
        )
    }
}

export default News