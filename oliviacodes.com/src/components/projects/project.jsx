import React from "react";
import Project from "./Project";
import OliveBlogLogo from "../public/Olive Blog.png";
import AdzibanLogo from "../public/Adziban.png";

const ProjectsList = () => {
	return (
		<div className="projects-list">
			<Project
				logo={OliveBlogLogo}
				title="Olive Blog App"
				description="A simple blogging platform where users can create accounts, write blog posts, and comment on others' posts."
				linkText="View Here"
				link="https://github.com/OliviaTetteh/Olive-Blog-App"
			/>
			<Project
				logo={AdzibanLogo}
				title="Adziban"
				description="A website where users can discover and share African recipes, with the ability to search, save, and rate them."
				linkText="View Here"
				link="https://github.com/OliviaTetteh/Adziban"
			/>
		</div>
	);
};

export default ProjectsList;

