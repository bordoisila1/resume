import React from 'react'
import '../../styles/articles.css'
import Article from '../article/Article'
import ArticlesHorizontalList from "./ArticlesHorizontalList";

class Articles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props}
        this.match = this.props.match
        this.state = {
            featuredArticle: this.props.featuredArticle ? this.props.featuredArticle :
                this.props.articles[this.props.articles.length - 1],
            articles: this.props.articles,
            articlesCategory: this.props.articlesCategory
        }

    }

    render() {
        return (
            <div className="container">
                <ArticlesHorizontalList articles={this.state.articles}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <br/>
                        </div>
                    </div>
                </div>
                <Article article={this.state.featuredArticle}/>
            </div>
        )
    }
}

export default Articles

