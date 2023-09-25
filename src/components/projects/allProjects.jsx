import React from "react";

import Project from "./project2";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						images={project.images}
						title={project.title}
						description={project.description}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
