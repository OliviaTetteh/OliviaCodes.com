import React from "react";
import Project from "./Project";
import OliveBlog from "./path/to/Olive Blog.png";
import Adziban from "./path/to/Adziban.png";

const ProjectsList = () => {
	return (
		<div className="projects-list">
			<Project
				logo={Olive Blog.png}
				title="Olive Blog App"
				description="A simple blogging platform where users can create accounts, write blog posts, and comment on others' posts."
				linkText="View Here"
				link="https://github.com/OliviaTetteh/Olive-Blog-App"
			/>
			<Project
				logo={adzibanLogo}
				title="Adziban"
				description="A website where users can discover and share African recipes, with the ability to search, save, and rate them."
				linkText="View Here"
				link="https://github.com/OliviaTetteh/Adziban"
			/>
		</div>
	);
};

export default ProjectsList;

