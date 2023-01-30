import React from 'react'

import mug from '../assets/mug.png'

export default function Info() {
    return (
        <div className="info--container">
            <img className="info--mug" src={mug}/>
            <div className="info--textContainer">
                <h1 className="info--name">Tyler Davis</h1>
                <h4 className="info--title">Full Stack Web Developer</h4>
                <h5 className="info--site">tylerallyndavis.com</h5>
            </div>
            <a className="info--emailLink" href="mailto:tallyndavis@comcast.net">
                <div className="info--buttonContainer">
                        <div className="info--emailButton">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <p>Email</p>
                        </div>
                    {/* <div className="info--socialButton">
                        <div class="info--linkedinIconFrame">
                            <i class="fa fa-linkedin"></i>
                        </div>
                        <p>LinkedIn</p>
                    </div> */}
                </div>
            </a>
        </div>
    )
}
