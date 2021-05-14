import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => (
    <NavLink className="npud" to={'/'}>
        <div className="offset-2 col-10 h-banner1 np">
            <img src="../logo.svg" alt="" />
        </div>
    </NavLink>
)

export default Logo