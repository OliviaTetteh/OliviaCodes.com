import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item"><Link to="/">Home</Link></li>
						<li className="footer-nav-link-item"><Link to="/about">About Me</Link></li>
						<li className="footer-nav-link-item"><Link to="/portfolio">Portfolio</Link></li>
						<li className="footer-nav-link-item"><Link to="/blog">Blog</Link></li>
						<li className="footer-nav-link-item"><Link to="/contact">Contact Me</Link></li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2024 OliviaTetteh. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;

