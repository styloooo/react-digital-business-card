import React from 'react'

export default function Footer() {
    return (
        <div className="footer--container">
            <div className="footer--iconFrameGroup">
                <div className="footer--iconFrame">
                    <a href="https://twitter.com/tylerallyndavis">
                        <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="footer--iconFrame">
                    <a href="https://www.linkedin.com/in/tylerallyndavis">
                        <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
                    </a>
                </div>
                <div className="footer--iconFrame">
                    <a href="https://github.com/styloooo/">
                        <i className="fa fa-github fa-lg" aria-hidden="true"></i>
                    </a>
                </div>                
                <div className="footer--iconFrame">
                    <a href="#">
                        <i className="fa fa-facebook fa-lg" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
