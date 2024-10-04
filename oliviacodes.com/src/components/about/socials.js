import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    faTwitter,
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "./styles/socials.css";

const Socials = () => {
    return (
        <div className="socials">
            <div className="social">
                <a href="https://x.com/OliviaTetteh5" target="_blank" rel="noreferrer">
                    <div className="social-icon">
                        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
                    </div>
                    <div className="social-text">Connect on X (Twitter)</div>
                </a>
            </div>

            <div className="social">
                <a href="https://github.com/OliviaTetteh" target="_blank" rel="noreferrer">
                    <div className="social-icon">
                        <FontAwesomeIcon icon={faGithub} className="social-icon" />
                    </div>
                    <div className="social-text">Check out my GitHub</div>
                </a>
            </div>

            <div className="social">
                <a href="https://www.linkedin.com/in/olivia-ahinee-tetteh-0257468a/" target="_blank" rel="noreferrer">
                    <div className="social-icon">
                        <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
                    </div>
                    <div className="social-text">Connect on LinkedIn</div>
                </a>
            </div>

            <div className="email">
                <div className="email-wrapper">
                    <a href="mailto:oatetteh@gmail.com" target="_blank" rel="noreferrer">
                        <div className="social-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="social-text">oatetteh@gmail.com</div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Socials;

