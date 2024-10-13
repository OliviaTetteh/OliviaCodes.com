import React from "react";
import Project from "./project";

<img src={`${process.env.PUBLIC_URL}/Olive Blog.png`} alt="Olive Blog" />
<img src={`${process.env.PUBLIC_URL}/Adziban.png`} alt="Adziban" />

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

