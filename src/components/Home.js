import React from 'react'

export const Home = () => (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <iframe className="hide_non_desktop" width="560"
                            height="315"
                            src="https://www.youtube.com/embed/F_6Emq5dyXQ"
                            frameborder="0"
                            allow="autoplay; encrypted-media"
                            allowfullscreen></iframe>
                    <div className="caption_homepage">
                        <span className="border hvr-bounce-to-left">SANTANU</span><br className="hide_br"/><br className="hide_br"/><br/>
                        <span className="border hvr-bounce-to-left">BARUAH</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="intro_text_container">
            <h6 className="border hvr-bounce-to-left">
                A technology professional in a bank in NYC, I love to solve business problems using technology and people.
                When I am not working there,
                I am busy walking<i className="em em-man-walking"></i> or making my Chai.
                <i className="em em-coffee"></i>
            </h6>
        </div>
    </div>
);