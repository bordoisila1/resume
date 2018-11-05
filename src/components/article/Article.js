import React from 'react'
import '../../styles/article.css'
import {_dps} from '../../utils/sanitize'

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = props
        this.title = _dps(this.state.article.title)
        this.description = _dps(this.state.article.description)
        this.leftImge = _dps(this.state.article.leftImage)
        this.rightImage = _dps(this.state.article.rightImage)
    }

    render() {

        return (
            <div className="article">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col article__title text-center">
                            <span>{this.title}</span>
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
                            <img className='img-fluid rounded' src={this.leftImge}/>
                        </div>
                        <div className="col-md-8 text-justify">
                            <span dangerouslySetInnerHTML={{ __html: this.description }}>
                            </span>
                        </div>
                        <div className="col-md-2 text-center">
                            <img className='d-none d-md-block img-fluid rounded' src={this.rightImage}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Article