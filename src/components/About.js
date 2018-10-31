import React from 'react'
import {aboutMeItems} from '../lib/about-me-items'

export const About = () => (
    <div>
        <div className="text_box"><h2 className="border">ABOUT ME</h2></div>
        <div className="container">
            <div className="row">
                {aboutMeItems.map((item, index) =>(
                    <>
                    <AboutBox item={item} key={index}/>
                    {index % 2 == 1? <div className="w-100"></div> : ""}
                    </>
                ))}
            </div>
        </div>
    </div>
);

const AboutBox = ({item, key}) => (
    <div className="col about_grid_item rounded hvr-grow-shadow">
        <h5>{item.title}</h5>
        <a className="bounce" href={item.url}
           target="_blank">
            <img className="grid_image rounded"
                 src={item.img}/>
        </a>
    </div>
)
