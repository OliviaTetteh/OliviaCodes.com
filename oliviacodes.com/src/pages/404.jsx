import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";
import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
	useEffect(() => {
		// Setting the page title dynamically
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				{/* Your website's navigation bar */}
				<NavBar />

				<div className="content-wrapper">
					<div className="notfound-logo-container">
						{/* Displaying your logo */}
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="notfound-container">
						{/* Error message section */}
						<div className="notfound-message">
							{/* Sad face icon and title */}
							<div className="notfound-title">
								Oops! <FontAwesomeIcon icon={faFaceSadTear} />
							</div>

							{/* Error message text */}
							<div className="not-found-message">
								Sorry, we couldn't find the page you're looking for.
								<br />
								The URL "{window.location.href}" doesn't seem to exist.
							</div>

							{/* Link back to the homepage */}
							<a href="/" className="not-found-link">
								Return to Home Page
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;

