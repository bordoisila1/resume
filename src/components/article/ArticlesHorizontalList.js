import React from 'react'
import { Route, Link } from "react-router-dom";
import '../../styles/articles-horizontal-list.css'
import Scrolly from '../scrollProgressBar/Scrolly'
import {getScrollPercentage} from "../../utils/getScrollHeight";

class ArticlesHorizontalList extends React.Component {
    constructor(props) {
        super(props)
        this.props = {...props}
        this.containerClass = "articles"
        this.state = {scrollPercentage:0}
    }

    handleScroll(e) {
        e.stopPropagation()
        let classes = e.target.className
        console.log("Event Target class: " + classes)
        if(classes.includes(this.containerClass)) {
            console.log("This will handle scroll Event for Articles on " + e.target.tagName
                + " with " + getScrollPercentage('.' + this.containerClass))
            this.setState({scrollPercentage: getScrollPercentage('.' + this.containerClass)})
        }
    }

    render() {
        return (
            <div className="articles__parent-container" onScroll={this.handleScroll.bind(this)}>
                <Scrolly scrollPercentage={this.state.scrollPercentage}/>
                <div className="articles container border border-light border-top-0">
                    <div className="row">
                        <div className="container col-10">
                            {this.props.articles.map((item, index) => (
                                <div className="articles__item row m-l-2">
                                    <Link to={`${item.url}${item.path}`}>
                                        <h2 className="articles__title text-left">
                                            {item.title}
                                            <i className="articles__wordcount"> - {item.description.split(" ").length} words</i></h2>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticlesHorizontalList