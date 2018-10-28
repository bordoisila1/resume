import React from 'react'
import { Route, Link } from "react-router-dom";

export const Interests = ({ match }) =>
    (
        <div>
            <div className="text_box"><h2 className="border">MY INTERESTS</h2></div>
            <ul>
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