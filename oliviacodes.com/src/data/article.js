import React from "react";

function article_1() {
	return {
		date: "4 October 2024",
		title: "My Portfolio Journey",
		description:
			"This article outlines my journey to building my portfolio.",
		keywords: [
			"My Portfolio Journey",
			"Olivia Tetteh",
			"Olivia Ahinee Tetteh",
			"Portfolio",
			"Web Development Journey",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.article-image {
					align-self: center;
					border-radius: 10px;
					width: 300px;
					height: auto;
					margin-top: 20px;
				}
				`,

		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						This article outlines the process and lessons learned while building my personal portfolio as a web developer. From designing the user interface to structuring the backend, every step of the journey has been an exciting opportunity to improve my skills.
					</div>
					<img
						src="https://via.placeholder.com/300"
						alt="Portfolio Journey"
						className="article-image"
					/>
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1];

export default myArticles;

