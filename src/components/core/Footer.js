import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            footerLogo : this.props.footerLogo ? this.props.footerLogo : "/images/icons/react-logo.svg",
            footerTitle: this.props.footerTitle ? this.props.footerTitle : "Powered by React JS"
        }
    }

    render() {
        return(
            <div className="basepage__footer__container container-fluid sticky">
                <div className="row">
                    <div className="col-1 footerLogo">
                        <a href="https://reactjs.org/"><img src={this.state.footerLogo}/></a>
                    </div>
                    <div className="col-1 footerTitle">
                        <a href="https://reactjs.org/">{this.state.footerTitle}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer