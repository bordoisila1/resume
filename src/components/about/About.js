import React from 'react'
import {aboutMeItems} from '../../lib/about-me-items'
import '../../styles/about.css'

export const About = () => (
    <div>
        <div><h6>ABOUT ME</h6></div>
        <div>
            <div>
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
    <div>
        <h6>{item.title}</h6>
        <a href={item.url}
           target="_blank">
            <img src={item.img}/>
        </a>
    </div>
)
