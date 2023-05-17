import React from 'react';
import './ActiveRoutes.css'
import { NavLink } from 'react-router-dom';

const ActiveRoutes = ({to, children}) => {
    return (
        <NavLink
            to={to}
            className={isActive => (!isActive ? "unselected" : "")
            }>
                {children}
        </NavLink>
    );
};

export default ActiveRoutes;