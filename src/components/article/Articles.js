import React from 'react'
import '../../styles/articles.css'
import Article from '../article/Article'
import ArticlesHorizontalList from "./ArticlesHorizontalList";

class Articles extends React.Component {
    constructor(props) {
        super(props)
        this.props = {...props}
        this.articles = this.props.articles
        this.match = this.props.match
    }

    render() {
        const first = (items) => items[0];
        return (
            <div className="container">
                <ArticlesHorizontalList articles={this.articles}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <br/>
                        </div>
                    </div>
                </div>
                <Article article={this.articles[1]}/>
            </div>
        )
    }
}

export default Articles

