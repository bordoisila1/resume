import React from 'react'
import NewsCard from "./NewsCard";

class NewsList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log('Rendering NewsList')
        let newsItems = this.props.newsItems
        if(newsItems && newsItems.news) {
            return(
                <div>
                    <div className='container-fluid news-list__container'>
                        {newsItems.news.map((item, index)=> (
                            <div className='row' key={index}>
                                <NewsCard newsItem={item}/>
                            </div>
                        ))}
                    </div>

                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="row text-center">
                        <div className="col">LOADING NEWS...</div>
                    </div>
                </div>
            )
        }
    }
}

export default NewsList
