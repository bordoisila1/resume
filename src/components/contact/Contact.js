import React from 'react'
import '../../styles/contact.css'

export const Contact = () => (
    <div>
        <div className="text_box"><h2 className="border">CONTACT</h2></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-md-3">
                    <div>
                        <a href="https://www.linkedin.com/in/santanu-baruah-gs/" target="_blank"><img className="icon_contacts" src="/images/icons/linkedin_icon.png" alt="LinkedIn icon"/>LinkedIn</a>
                        <br/>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-10 col-md-3">
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-10 col-md-3">
                    <div>
                        <a href="https://github.com/bordoisila1" target="_blank"><img className="icon_contacts" src="/images/icons/github_icon.png" alt="mail icon"/>GitHub</a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-10 col-md-3">
                    <hr/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-10 col-md-3">
                    <div>
                        <a href="mailto:sikusantanu@gmail.com" target="_blank"><img className="icon_contacts" src="/images/icons/mail_icon.png" alt="mail icon"/>sikusantanu@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);