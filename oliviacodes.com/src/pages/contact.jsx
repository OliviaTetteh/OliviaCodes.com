import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top on component mount
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Let's Connect: How to Reach Me
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in reaching out. I
							appreciate your feedback, questions, and suggestions. 
							If you have any specific inquiries or comments, 
							feel free to email me directly at&nbsp;
							<a href={`mailto:${INFO.main.email}`}>
								{INFO.main.email}
							</a>.
							I aim to reply to all messages within 24 hours,
							though it might take a little longer during busy
							periods. You're also welcome to use the contact
							form on my website—just fill in the details, and
							I'll respond as soon as possible. If you'd prefer
							to connect via social media, you can find me on&nbsp;
							<a
								href={INFO.socials.twitter} // Updated to Twitter
								target="_blank"
								rel="noreferrer"
							>
								Twitter
							</a>.
							I share regular updates and interact with my followers
							there, so feel free to connect with me. Thanks again 
							for your interest—I look forward to hearing from you!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;

