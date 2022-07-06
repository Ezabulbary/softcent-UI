import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom";

const CustomLink = ({ children, to }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: match ? "none" : "none", color: match ? "blue" : "black" }}
                to={to}
            >
                {children}
            </Link>
        </div>
    );
};

export default CustomLink;