import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const HomePage = () => (
    <Router>
        <div className="parent_container">
            <div className="nav_bar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About-me</Link>
                    </li>
                    <li>
                        <Link to="/interests">Interests</Link>
                    </li>
                </ul>
            </div>

            <hr />
            <div className="lower_container">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/interests" component={Interests} />
            </div>
        </div>
    </Router>
);

const Home = () => (
    <div>
        {/*<div className="container">
            <div className="row">
                <div className="col about_grid_item rounded">
                    <a href="https://www.youtube.com/watch?v=6Tou8-Cz8is" target="_blank"><img className="grid_image_big rounded" src="/images/banana_large.jpg"/></a>
                </div>
            </div>
        </div>*/}
        <div className="bgimg_1">
            <div className="caption">
                <span className="border">SANTANU</span><br/><br/><br/>
                <span className="border">BARUAH</span>
            </div>
        </div>
    </div>
);

const About = () => (
    <div>
        <h2>About me</h2>
        <div className="container">
            <div className="row intro_text_container">
                <h6 className="round">I am Santanu Baruah,
                    a technology professional in a bank.
                    When I am not working there,
                    I am busy walking<i className="em em-man-walking"></i> or making Chai.
                    <i className="em em-coffee"></i>
                </h6>
            </div>
            <div className="w-100"></div>
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

const Interests = ({ match }) =>
    (
        <div>
            <h2>Topics</h2>
            <ul className="nav_bar">
                <li>
                    <a href="https://www.citibikenyc.com/">
                        <img src="https://d21xlh2maitm24.cloudfront.net/nyc/01unlock2.JPG?mtime=20160428123800"/>
                    </a>
                </li>
                <li path={match.path}>
                    <Link to={`${match.url}/history`}>History</Link>
                </li>
                <li path={match.path}>
                    <Link to={`${match.url}/chai`}>Chai</Link>
                </li>
                <li path={match.path}>
                    <Link to={`${match.url}/books`}>Books</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:interestId`} component={Interest}/>
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );

const Interest = ({ match }) => (
    <div>
        <h3>{match.params.interestId}</h3>
    </div>
);

export default HomePage;