import React, {Component} from 'react'
import {ACTIVE} from '../../lib/constants'

export class Link extends Component {

    handleClick = (evt) => {
        evt.preventDefault()
        this.context.linkHandler(this.props.val)
    }

    render() {
        const activeClass = this.context.route === this.props.val? ACTIVE:''
        return (<a href='#' className={activeClass} onClick={this.handleClick}>{this.props.children}</a>)
    }
}