import React from 'react';
import {selectActivePlate} from './reducer';
import {connect} from "react-redux";

const Plate = ({plate}) => {
    return plate;
}

const mapStateToProps = state => {
    return {
        plate: selectActivePlate(state)
    }
}

export default connect(mapStateToProps)(Plate);