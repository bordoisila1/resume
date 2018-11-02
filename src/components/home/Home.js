import React from 'react'
import '../../styles/home.css'
import homeContentItems from '../../lib/homepage-content'
import DOMPurify from 'dompurify'

const homePageBodyText = DOMPurify.sanitize(homeContentItems.mainDescription);

export const Home = () => (
    <div className="homepage">
        <div className="container-fluid">
            <div className="row">
                <div className="col homepage__title text-center">
                    <span>{homeContentItems.title}</span>
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
        <div className="container-fluid homepage__content">
            <div className="row">
                <div className="col-md-2 text-center">
                    <img class='img-fluid rounded' src='/images/buddha.jpg'/>
                </div>
                <div className="col-md-8 text-justify">
                    <h6 dangerouslySetInnerHTML={{ __html: homePageBodyText }}>
                    </h6>
                </div>
                <div className="col-md-2 text-center">
                    <img className='d-none d-md-block img-fluid rounded' src='/images/banana_large.jpg'/>
                </div>
            </div>
        </div>
    </div>
);