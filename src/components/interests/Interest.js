import React from 'react'
import interests from "../../lib/interests";
import Article from '../article/Article'
import '../../styles/interest.css'
import {NoMatch} from "../core/NoMatch";
import { Route, Link, Switch } from "react-router-dom";
import PlainChoiceText from '../article/PlainChoiceText'

export const Interests = ({ match }) =>
    (
        <div>
            <div className="text_box"><h2 className="border">My Interests</h2></div>
            <div className="container interest_flex_container">
                <div className="row scroll_animation">
                    {interests.map((item, index)=> (
                        <div key={index}>
                            <div className="col" style={{padding: 0, margin: 15}}>
                                <span>{item.label}</span><br/>
                                <Link to={`${match.url}${item.path}`}>
                                    <img className="interest_item" src={item.leftImage} alt={item.alt}/>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Switch>
                {interests.map((article, index) => (
                    //Creates a Route that takes a path and renders a React Element based on the props being passed
                    <Route key={index}
                           path={`${match.path}${article.path}`}
                           render={() =>
                               <Article article={article} />}
                    />
                ))}
                <Route path={match.path} exact={true} component={PlainChoiceText}/>
                <Route component={NoMatch} status={404}/>
            </Switch>
        </div>
    );

/*const Interest = ({ match }) => (
    <div>
       <Modal description={getInterestText(match.params.interestId)} display={true}/>
    </div>
);*/

/*
const getInterestText = (interestId, defaultDescription = "No description available") => {
    if(interestId !== undefined) {
        let description = interests.find(item => item.interestId === interestId)["description"]
        return description !== undefined && description !== "" ? description : defaultDescription
    }
    return "Wait, what ?"
}*/
