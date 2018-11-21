import React from 'react'
import Spinner from 'react-spinkit'
import '../../styles/news.css'

class FlagsBanner extends React.Component {
    constructor(props) {
        super(props)
    }

    fetchFlag = (country, countries) => {
        console.log('*****' + this.props.currentCountry)
        return (countries.filter(country => country.code === this.props.currentCountry)[0].flag)
    }

    handleShowFlagsDropdownClick(e) {
        //console.log(e.target)
        if(e.target && e.target.closest('.flags__container')) {
            const parent = e.target.closest('.flags__container')
            const flagsList = parent.querySelector('.flags__list')
            if(flagsList && flagsList.classList && flagsList.classList.contains('opened')) {
                flagsList.classList.remove('opened')
                flagsList.classList.add('closed')
            } else if(flagsList && flagsList.classList && flagsList.classList.contains('closed')){
                flagsList.classList.remove('closed')
                flagsList.classList.add('opened')
            }

            const dropdownIcon = parent.querySelector('.flags__dropdown-icon img')
            if(dropdownIcon && dropdownIcon.classList && !dropdownIcon.classList.contains('inverted')) {
                dropdownIcon.classList.add('inverted')
            } else if(dropdownIcon && dropdownIcon.classList && dropdownIcon.classList.contains('inverted')) {
                dropdownIcon.classList.remove('inverted')
            }
        }
    }

    render() {
        console.log('Rendering FlagBanner')
        let countries = this.props.countries
        if(countries && countries.countries) {
            countries = countries.countries
            return(
                <div className='container flags__container'>
                    <div className='row flags__nav news-card' onClick={this.handleShowFlagsDropdownClick.bind(this)}>
                        <div className='col-10 col-md-2 col-lg-1'>
                            <img src={this.fetchFlag(this.props.currentCountry, countries)}/>
                        </div>
                        <div className='col-2 col-md-2 col-lg-1 flags__dropdown-icon align-middle'>
                            <img src='/images/icons/dropdown.png'/>
                        </div>
                    </div>
                    <div className='row closed flags__list news-card' onClick={this.handleShowFlagsDropdownClick.bind(this)}>
                        <div className='col'>
                            {countries.map((item, index) =>
                                <a key={index} // This needs to be converted to LINK
                                   onClick={this.props.handleFlagClick}
                                    className='col'>
                                    <img className='flags__image' value={item.code} src={item.flag}/>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="h-100 row align-items-center">
                    <div className="col-4">
                        <Spinner className="loading" name="ball-zig-zag" color="red"/>
                    </div>
                </div>
            )
        }
    }
}

export default FlagsBanner