import React from 'react'
import PropTypes from 'prop-types';
import '../../styles/news.css'

class NewsCard extends React.Component {
    constructor(props) {
        super(props)
    }

    handleViewMore(e) {
        e.stopPropagation()
        console.log(e.target)

    }

    render() {
        let newsItem = this.props.newsItem;
        if(newsItem) {
            return (
                <div className='container news-card'>
                    <div className='row news-card__title'>
                        <div className='col'>
                            <h5>{newsItem.title}</h5>
                        </div>
                    </div>
                    <div className='row news-card__source-name'>
                        <div className='col'>
                            {newsItem.source.name}
                        </div>
                    </div>
                    <div className='row news-card__source-published-at'>
                        <div className='col'>
                            {newsItem.publishedAt}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col col-md-4 news-card__image' onClick={this.handleViewMore.bind(this)}>
                                    <img alt=''
                                         className='img-fluid'
                                         src={newsItem.leftImage}
                                    />
                                </div>
                                <div className={`col-12 ${newsItem.description ? 'col-md-8' : ''} news-card__description`}>
                                    {
                                        newsItem.description?
                                        newsItem.description.substring(0,newsItem.description.indexOf('['))
                                        : ''
                                    }
                                    <span>
                                        <a target='_blank'
                                           href={newsItem.url}>
                                            Read more at
                                            <span>
                                                <strong>
                                                    {newsItem.source.name}
                                                </strong>
                                            </span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr/>
                </div>
            )
        }
    }
}

NewsCard.propTypes = {
    title: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    tags: PropTypes.array,
    leftImage: PropTypes.string.isRequired,
    alt: PropTypes.string,
    description: PropTypes.string.isRequired,
    source: PropTypes.object.isRequired,
    publishedAt: PropTypes.string
};

NewsCard.defaultProps = {
    title: '',
    label: '',
    path: '',
    url: '',
    tags: [],
    leftImage: '',
    alt: '',
    description: '',
    source: {},
    publishedAt: ''
};

export default NewsCard