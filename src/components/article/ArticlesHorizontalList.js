import React from 'react'
import { Route, Link } from "react-router-dom";
import '../../styles/articles-horizontal-list.css'
import Scrolly from '../scrollProgressBar/Scrolly'
import {getScrollPercentage} from "../../utils/scrollUtils";

class ArticlesHorizontalList extends React.Component {
    constructor(props) {
        super(props);
        this.props = {...props}
        this.containerClass = this.props.containerClass
            ? this.props.containerClass
            : "articles"
        this.state = {scrollPercentage:0}
    }

    handleScroll = (e) => {
        e.stopPropagation()
        let classes = e.target.className
        if(classes.includes(this.containerClass)) {
            this.setState({scrollPercentage: getScrollPercentage('.' + this.containerClass)})
        }
    }

    render() {
        return (
            <div className="articles__parent-container" onScroll={this.handleScroll}>
                <Scrolly scrollPercentage={this.state.scrollPercentage} scrollHeading={this.props.scrollHeading}/>
                <div className="articles container border">
                    <div className="row">
                        <div className="container col-8">
                            {this.props.articles.map((item, index) => (
                                <div key={index} className="articles__item row m-l-2">
                                    <Link to={`${item.url}${item.path}`}>
                                        {/*<img src={item.leftImage} className="articles__image col-2"></img>*/}
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