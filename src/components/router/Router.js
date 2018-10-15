import React,{Component} from 'react'
import PropTypes from 'prop-types'

const getCurrentPath = () => {
    //The path at the URL of hte browser
    const path = document.location.pathname
    //First index of / determines the path's beginning
    return path.substring(path.indexOf("/"))
}

export class Router extends Component {

    //Initial state
    state = {
        route : getCurrentPath()
    }

    //Handles click of any link
    handleLinkClick = (route) => {
        this.setState({route})
        window.history.pushState(null, '', route)
    }

    //Setting PopTypes for the context items
    static childContextTypes = {
        route: PropTypes.string,
        linkHandler: PropTypes.func
    }

    //Provides context data to the children - Change with newer major version
    getChildContext() {
        return {
            route: this.state.route,
            linkHandler: this.handleLinkClick
        }
    }

    componentDidMount() {
        window.onpopstate = () => {
            //Change the route based on the current path
            this.setState({route: getCurrentPath()})
        }
    }

    render() {
        //Wraps the children
        return <div>{this.props.children}</div>
    }

}