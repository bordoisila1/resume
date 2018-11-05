import React from 'react'
import '../../styles/articles.css'
import Article from '../article/Article'
import ArticlesHorizontalList from "./ArticlesHorizontalList";

class Articles extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props}
        this.match = this.props.match
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
                <Article article={this.state.articles[1]}/>
            </div>
        )
    }
}

export default Articles

