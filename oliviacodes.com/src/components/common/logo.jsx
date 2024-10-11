import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
    const { width } = props; // width is passed as a prop
    const link = true; // Set the logo to be clickable (link to home page)

    const imageElement = (
        <img src={INFO.main.logo} alt="logo" className="logo" width={width} />
    );

    return (
        <React.Fragment>
            <Link to="/">{imageElement}</Link>
        </React.Fragment>
    );
};

export default Logo;

