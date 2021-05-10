import React from 'react';
import CallUs from '../atoms/callUs.jsx';
import Logo from '../atoms/logo.jsx';
const Header = () => (
    <header>
        <div className="row">
            <div className="col">
                <Logo />
            </div>
            <div className="col">
                <CallUs />
            </div>
        </div>
    </header>
)
export default Header