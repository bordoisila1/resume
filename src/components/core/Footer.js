import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footerLogo : this.props.footerLogo ? this.props.footerLogo : "/images/icons/react-logo.svg",
            footerTitle: this.props.footerTitle ? this.props.footerTitle : "Powered by React"
        }
    }

    render() {
        return(
            <div className="basepage__footer__container container-fluid sticky">
                <div className="row">
                    <div className="col-1 footerLogo">
                        <img src={this.state.footerLogo}/>
                    </div>
                    <div className="col-1">
                        <h6>{this.state.footerTitle}</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer