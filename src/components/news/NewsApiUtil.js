import React from 'react'
import request from 'request'
import Article from '../article/Article'
import interests from "../../lib/interests";

class NewsApiUtil extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let newsItems = this.props.newsItems
        if(newsItems) {
            console.log(newsItems.news[0])
            return(
                <div>
                    <div>
                        {newsItems.news.map((item, index)=> (
                            <>
                                <Article article={item}/>
                                <span><a href={item.url}>Read more here..</a></span>
                                <hr/>
                            </>
                        ))}
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }

    }
}

export default NewsApiUtil