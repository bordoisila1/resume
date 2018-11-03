import React from 'react'
import '../../styles/article.css'
import DOMPurify from "dompurify";

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
        this.articleTitle = DOMPurify.sanitize(this.props.article.title)
        this.articleBody = DOMPurify.sanitize(this.props.article.mainDescription)
        this.articleLeftImage = DOMPurify.sanitize(this.props.article.leftImage)
        this.articleRightImage = DOMPurify.sanitize(this.props.article.rightImage)
    }

    render() {

        return (
            <div className="article">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col article__title text-center">
                            <span>{this.articleTitle}</span>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <br/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid article__content">
                    <div className="row">
                        <div className="col-md-2 text-center">
                            <img class='img-fluid rounded' src={this.articleLeftImage}/>
                        </div>
                        <div className="col-md-8 text-justify">
                            <span dangerouslySetInnerHTML={{ __html: this.articleBody }}>
                            </span>
                        </div>
                        <div className="col-md-2 text-center">
                            <img className='d-none d-md-block img-fluid rounded' src={this.articleRightImage}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article