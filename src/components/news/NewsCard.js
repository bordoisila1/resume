import React from 'react'
import PropTypes from 'prop-types';
import '../../styles/news.css'
import SocialShare from '../core/SocialShare'

class NewsCard extends React.Component {
    constructor(props) {
        super(props)
    }

    handleViewDescription(e) {
        e.stopPropagation()
        if(e.target && e.target.closest('.news-card')) {
            const parent = e.target.closest('.news-card')
            const descriptionNode = parent.querySelector('.news-card__description')
            if(descriptionNode && descriptionNode.classList) {
                descriptionNode.classList.toggle('show')
            }
            const readMoreIconNode = parent.querySelector('.news-card__read-more')
            if(readMoreIconNode && readMoreIconNode.classList) {
                readMoreIconNode.classList.toggle('hide')
            }
        }
    }

    render() {
        let newsItem = this.props.newsItem;
        if(newsItem) {
            return (
                <div className='container news-card'>
                    <div className='row news-card__title'>
                        <div className='col' onClick={this.handleViewDescription.bind(this)}>
                            <h5>{newsItem.title}</h5>
                        </div>
                    </div>
                    {/*Social Share*/}
                    <SocialShare/>
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
                    <div className='row news-card__description-image-container'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col col-md-4'>
                                    <img alt=''
                                         className='img-fluid'
                                         src={newsItem.leftImage}
                                         onClick={this.handleViewDescription.bind(this)}
                                    />
                                </div>
                                <div className='col-12 news-card__read-more'><img src='/images/icons/readMore.svg' onClick={this.handleViewDescription.bind(this)}/></div>

                                <div className={`col-12 ${newsItem.description ? 'col-md-8' : ''} news-card__description`}>
                                    {
                                        newsItem.description?
                                        newsItem.description.substring(0,newsItem.description.indexOf('['))
                                        : ''
                                    }
                                    <span>
                                        <a target='_blank'
                                           href={newsItem.url}>
                                            <span>{this.props.readMoreLabel}</span>
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
    publishedAt: PropTypes.string,
    newsItem: PropTypes.string.isRequired,
    readMoreLabel: PropTypes.string.isRequired
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
    publishedAt: '',
    newsItem: {},
    readMoreLabel: "Read more at "
};

export default NewsCard