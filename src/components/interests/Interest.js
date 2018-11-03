import React from 'react'
import { Route, Link } from "react-router-dom";
import interests from "../../lib/interests";
import Modal from '../modal/Modal'
import '../../styles/interest.css'

export const Interests = ({ match }) =>
    (
        <div>
            <div className="text_box"><h2 className="border">MY INTERESTS</h2></div>
            <div className="container interest_flex_container">
                <div className="row scroll_animation">
                    {interests.map((item, index)=> (
                        <div key={index}>
                            <div className="col  hvr-grow-shadow" style={{padding: 0, margin: 15}}>
                                <span>{item.label}</span><br/>
                                <Link to={`${match.url}${item.path}`}>
                                    <img className="interest_item" src={item.leftImage} alt={item.alt}/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Route path={`${match.path}/:interestId`} component={Interest}/>
            <Route
                exact
                path={match.path}
                render={() => (
                    <>

                    </>
                )}
            />
        </div>
    );

const Interest = ({ match }) => (
    <div>
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