import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "about");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`About | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="about" />
                <div className="content-wrapper">
                    <div className="about-logo-container">
                        <div className="about-logo">
                            <Logo width={46} />
                        </div>
                    </div>

                    <div className="about-container">
                        <div className="about-main">
                            <div className="about-right-side">
                                <div className="title about-title">
                                    {"Hello World! I'm Olivia Ahinee Tetteh, a creative from Ghana, envisioning and crafting the designs of the future"}
                                </div>

                                <div className="subtitle about-subtitle">
                                    {"I've had the opportunity to work on a diverse range of projects over the years, and I’m proud of the progress I've achieved. If you're curious about any of my work, feel free to explore the code and share any suggestions for improvements or enhancements. Collaboration is a valuable way to learn and grow, and I’m always open to fresh ideas and constructive feedback."}
                                </div>
                            </div>

                            <div className="about-left-side">
                                <div className="about-image-container">
                                    <div className="about-image-wrapper">
                                        <img
                                            src="about.png"
                                            alt="about"
                                            className="about-image"
                                        />
                                    </div>
                                </div>

                                <div className="about-socials">
                                    <Socials /> {/* Social media links */}
                                </div>
                            </div>
                        </div>
                        <div className="about-socials-mobile">
                            <Socials /> {/* Display social links on mobile */}
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;

