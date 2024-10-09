import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
    const { active } = props;

    return (
        <React.Fragment>
            <div className="nav-container">
                <nav className="navbar">
                    <div className="nav-background">
                        <ul className="nav-list">
                            <li className={active === "home" ? "nav-item active" : "nav-item"}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={active === "about" ? "nav-item active" : "nav-item"}>
                                <Link to="/about">About Me</Link>
                            </li>
                            <li className={active === "projects" ? "nav-item active" : "nav-item"}>
                                <Link to="/projects">My Projects</Link>
                            </li>
                            <li className={active === "github" ? "nav-item active" : "nav-item"}>
                                <a href="https://github.com/OliviaTetteh" target="_blank" rel="noreferrer">GitHub</a>
                            </li>
                            <li className={active === "contact" ? "nav-item active" : "nav-item"}>
                                <Link to="/contact">Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default NavBar;

