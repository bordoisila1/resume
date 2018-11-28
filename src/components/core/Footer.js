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
            <div className="footer-container container">
                <div className="row news-card">
                    <footer className="col">
                    </footer>
                </div>
            </div>
        )
    }
}

export default Footer