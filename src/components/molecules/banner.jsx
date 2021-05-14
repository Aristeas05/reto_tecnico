import React from 'react';
import CallUs from '../atoms/callUs.jsx';
import Logo from '../atoms/logo.jsx';

const Banner = () => (
    <div className="row nr b-props">
        <div className="col npud">
            <Logo />
        </div>
        <div className="col npud">
            <CallUs />
        </div>
    </div>
)

export default Banner