import React from 'react'
import { Route, Link } from "react-router-dom";
import interests from "../lib/interests";
import Modal from './Modal'

export const Interests = ({ match }) =>
    (
        <div>
            <div className="text_box"><h2 className="border">MY INTERESTS</h2></div>
            <div className="container interest_flex_container">
                <div className="row">
                    {interests.map((item, index)=> (
                        <>
                        <div class="col  hvr-curl-bottom-right" style={{padding: 0, margin: 15}}>
                            <span>{item.label}</span><br/>
                            <Link to={`${match.url}${item.path}`}>
                                <img className="interest_item" src={item.img} alt={item.alt}/>
                            </Link>
                        </div>
                            </>
                    ))}
                </div>
            </div>

            <Route path={`${match.path}/:interestId`} component={Interest}/>
            <Route
                exact
                path={match.path}
                render={() => <h4 className="text_box"><span className="border">Please select a topic.</span></h4>}
            />
        </div>
    );

const Interest = ({ match }) => (
    <div>
        <h4>{getInterestText(match.params.interestId)}</h4>
       <Modal description={getInterestText(match.params.interestId)} display={true}/>
    </div>
);

const getInterestText = (interestId, defaultDescription = "No description available") => {
    if(interestId !== undefined) {
        let description = interests.find(item => item.interestId === interestId)["description"]
        return description !== undefined && description !== "" ? description : defaultDescription
    }
    return "Wait, what ?"
}