import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";
import { myProjects } from "../data/projects"; // Assuming you have a data file for your projects

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							My contributions as I strive to make a
		                                        meaningful impact.
						</div>

						<div className="subtitle projects-subtitle">
							I’ve had the opportunity to work on a diverse
		                                        range of projects over the years, and I’m
		                                        proud of the progress I've achieved. If you're
		                                        curious about any of my work, feel free to
		                                        explore the code and share any suggestions for
		                                        improvements or enhancements. Collaboration is
		                                        a valuable way to learn and grow, and I’m always
		                                        open to fresh ideas and constructive feedback.
						</div>

						<div className="projects-list">
							{myProjects.map((project, index) => (
								<div key={index} className="project-item">
									<h3>{project.title}</h3>
									<p>{project.description}</p>
									<a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
								</div>
							))}
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

export default Projects;

