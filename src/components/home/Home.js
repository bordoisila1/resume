import React from 'react'
import News from "../news/News";
import request from "request";
import PropTypes from "prop-types";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props}
    }

    handleFlagClick(e) {
        e.stopPropagation();
        const currentCountry = e.target.getAttribute('value')
        this.fetchCountryNews(
            this.state.countryNewsUrlPrefix,
            currentCountry)
            .then((data) => {
                this.setState({
                    newsItems: JSON.parse(data),
                    country: currentCountry
                })
            })
    }

    fetchCountryFlags(url) {
        return new Promise((resolve, reject) => {
            let options = {
                url: url
            }
            request.get(options, (error, res, body) => {
                if (error) {
                    reject(error) // Rejects the Promise
                } else {
                    console.log("Fetching countries list")
                    resolve(body) // The JSON will be served to the then entry
                }
            })
        })
    }

    fetchCountryNews(prefix, country) {
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

    componentWillMount() {
        //Fetch countries
        this.fetchCountryFlags(this.state.countriesUrl)
            .then((data) => {
                this.setState({
                    countries: JSON.parse(data)
                })
            });

        this.fetchCountryNews(this.state.countryNewsUrlPrefix, this.state.country).then((data) => {
            this.setState({
                newsItems: JSON.parse(data)
            })
        })
    }

    render() {
        console.log("Rendering Home")
        return (
            <>
                <News countries={this.state.countries}
                      newsItems={this.state.newsItems}
                      currentCountry={this.state.country}
                      handleFlagClick={this.handleFlagClick.bind(this)}/>
            </>
        )
    }
}

Home.propTypes = {
    country: PropTypes.string.isRequired,
    countries: PropTypes.object.isRequired,
    newsItems: PropTypes.object.isRequired,
    countriesUrl: PropTypes.string.isRequired,
    countryNewsUrlPrefix: PropTypes.string.isRequired
};

Home.defaultProps = {
    country: 'us', // Default Country
    countries: {},
    newsItems: {},
    countriesUrl: 'http://localhost:5000/api/v1/countries',
    countryNewsUrlPrefix: 'http://localhost:5000/api/v1/news/'
};

export default Home
