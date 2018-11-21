import React from 'react'
import News from "../news/News";
import request from "request";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        console.log("Constructor called *****")
        this.fetchCountryFlags(props.countriesUrl)
            .then((data) => {
                this.setState({
                    countries: JSON.parse(data)
                })
            });
    }

    handleFlagClick(e) {
        e.stopPropagation();
        e.preventDefault();
        const currentCountry = e.target.getAttribute('value')
        this.props.history.push(`${this.props.match.url}/${currentCountry}`)
        console.log('****Clicked ' + currentCountry)
        this.setState({
            country: currentCountry
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
                    console.log("****Fetching countries list")
                    resolve(body) // The JSON will be served to the then entry
                }
            })
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <Route exact path={`${this.props.match.url}`} render={(props) => <News {...props}
                                                                                 countries={this.state.countries}
                                                                                 currentCountry={this.props.country}
                                                                                 handleFlagClick={this.handleFlagClick.bind(this)}/>}/>
                <Route exact path={`${this.props.match.url}/:topicId`} render={(props) =>{
                    console.log(JSON.stringify(props.match.params) + '^^&&^^&&')
                    return(<News {...props} countries={this.state.countries}
                                 currentCountry={props.match.params.topicId}
                                 handleFlagClick={this.handleFlagClick.bind(this)}/>)}}/>
            </>
        )
    }
}

Home.propTypes = {
    country: PropTypes.string.isRequired,
    countries: PropTypes.object.isRequired,
    countriesUrl: PropTypes.string.isRequired,
};

Home.defaultProps = {
    country: 'us', // Default Country
    countries: {},
    countriesUrl: 'http://localhost:5000/api/v1/countries',
};

export default Home