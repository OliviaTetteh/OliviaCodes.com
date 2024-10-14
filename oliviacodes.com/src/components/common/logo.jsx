import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
    const { width } = props;

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

