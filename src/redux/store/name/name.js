import React from 'react';
import {selectActiveName} from './reducer';
import {connect} from "react-redux";

const Name = ({name}) => {
    return name;
}

const mapStateToProps = state => {
    return {
        name: selectActiveName(state)
    }
}

export default connect(mapStateToProps)(Name);