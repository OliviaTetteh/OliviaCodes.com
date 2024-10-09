import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./AlxHolberton.png"
								alt="Alx-Holberton School"
								className="work-image"
							/>
							<div className="work-title">Alx-Holberton School</div>
							<div className="work-subtitle">
								Software Engineer Student
							</div>
							<div className="work-duration">2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./JDM.png"
								alt="JDM Enterprise"
								className="work-image"
							/>
							<div className="work-title">JDM Enterprise</div>
							<div className="work-subtitle">
								Enterpreneur
							</div>
							<div className="work-duration">2021 - 2024</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

