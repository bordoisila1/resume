import React from 'react'

export const About = () => (
    <div>
        <div className="text_box"><h2 className="border">ABOUT ME</h2></div>
        <div className="container">
            <div className="row">
                <div className="col about_grid_item rounded">
                    <h5>Linkedin</h5>
                    <a href="https://www.linkedin.com/in/santanu-baruah-gs/" target="_blank"><img className="grid_image rounded" src="/images/linkedin_logo.jpg"/></a>
                </div>
                <div className="col about_grid_item rounded">
                    <h5>GitHub</h5>
                    <a href="https://github.com/bordoisila1" target="_blank"><img className="grid_image rounded" src="/images/github_logo.jpg"/></a>
                </div>
                <div className="w-100"></div>
                <div className="col about_grid_item rounded">
                    <h5>Currently listening to..</h5>
                    <a href="https://www.youtube.com/channel/UCqNxhPZoLJ81i5QaK4nqn8A" target="_blank"><img className="grid_image rounded" src="/images/cas_logo.jpg"/></a>
                </div>
                <div className="col about_grid_item rounded">
                    <h5>Currently Reading...</h5>
                    <a href="https://www.amazon.com/Silk-Roads-New-History-World/dp/1101912375" target="_blank"><img className="grid_image rounded" src="/images/silkroads_book_logo.jpg"/></a>
                </div>
            </div>
        </div>
    </div>
);
