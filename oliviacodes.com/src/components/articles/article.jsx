import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import "./style/article.css";
import SingleArticle from "./Article"

const Article = () => {
	return (
		<React.Fragment>
			<div className="article">
				<div className="article-left-side">
					<div className="article-date">October 4, 2024</div>
				</div>

				<a href="http://www.linkedin.com/article/edit/7247956308547493888" target="_blank" rel="noreferrer">
					<div className="article-right-side">
						<div className="article-title">My Portfolio Journey</div>
						<div className="article-author">by Olivia Ahinee Tetteh</div>
						<div className="article-description">
							This article outlines my journey to building my portfolio.
						</div>
						<div className="article-link">
							Read Article
							<FontAwesomeIcon
								style={{ fontSize: "10px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
				</a>
			</div>
		</React.Fragment>
	);
};

export default Article;

