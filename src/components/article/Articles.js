import React from 'react'
import '../../styles/articles.css'
import Article from '../article/Article'
import PlainChoiceText from '../article/PlainChoiceText'
import ArticlesHorizontalList from "./ArticlesHorizontalList";
import {NoMatch} from "../core/NoMatch";
import {Route, Switch} from "react-router-dom";

class Articles extends React.Component {
    constructor(props) {
        super(props)
        this.match = this.props.match
        this.featuredArticle = this.props.featuredArticle ? this.props.featuredArticle :
                this.props.articles[this.props.articles.length - 1]
    }

    render() {
        return (
            <div className="container">
                <div className='text-center'>Coming soon</div>
                <ArticlesHorizontalList articles={this.props.articles} match={this.match}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <br/>
                        </div>
                    </div>
                </div>
                <Switch>
                    {this.props.articles.map((article, index) => (
                    //Creates a Route that takes a path and renders a React Element based on the props being passed
                       <Route key={index}
                             path={`${this.match.path}${article.path}`}
                               render={() =>
                                 <Article article={article} />}
                       />
                    ))}
                    <Route path={this.match.path} exact={true} component={PlainChoiceText}/>
                    <Route component={NoMatch} status={404}/>
                </Switch>
            </div>
        )
    }
}

export default Articles

