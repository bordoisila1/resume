import React from 'react'
import request from "request";
import Spinner from 'react-spinkit'
import '../../styles/news.css'

class FlagsBanner extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('Rendering FlagBanner')
        let countries = this.props.countries
        if(countries && countries.countries) {
            countries = countries.countries
            return(
                <div className='container-fluid flags_flex_container'>
                    <div className='row'>
                        {countries.map((item, index) =>
                            <a key={index}
                               onClick={this.props.handleFlagClick}
                               href='#'>
                                <img value={item.code} src={item.flag}/>
                            </a>
                        )}
                    </div>
                </div>
            )
        } else {
            return (
                <div className="h-100 row align-items-center">
                    <div className="col">
                        <Spinner className="loading" name="ball-zig-zag" color="red"/>
                    </div>
                </div>
            )
        }
    }
}

export default FlagsBanner