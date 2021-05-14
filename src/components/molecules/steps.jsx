import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom"

function getSteps() {
    return ['Datos del Auto', 'Arma tu plan'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
        return '';
        case 1:
        return '';
        default:
        return 'Unknown step';
    }
}

const Steps = ({presentStep,goBackStep,showInfo}) => {
    const steps = getSteps();

    const triggerChanges = () => {
        goBackStep();
        showInfo();
    }

    return(
        <>
            <div className="d-none d-sm-block col-12 col-md-3 col-lg-2 col-xl-3 d-back">
                <div className="d-changer d-separation">
                    <Stepper activeStep={presentStep} orientation="vertical">
                        {steps.map((label, index) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                            <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            </StepContent>
                        </Step>
                        ))}
                    </Stepper>
                </div>
            </div>
            <div className="d-separationR d-SidesR col-12 d-block d-sm-none">
                <div className="row nr np">
                    {
                        !presentStep ? (
                            <>
                                <div className="col-5 np">
                                    <NavLink className="d-stepTextR" exact to="/">
                                        <img className="d-backIco" src="../data/back_arrow_responsive.svg" alt="Back" />
                                        PASO 1 DE 2
                                    </NavLink>
                                </div>
                                <div className="col-7 np">
                                    <div className="progress npud">
                                        <div className="progress-bar d-progressR1" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </>
                        ):
                        (
                            <>
                                <div className="col-5 np">
                                    <p className="d-stepTextR" onClick={triggerChanges}>
                                        <img className="d-backIco" src="../data/back_arrow_responsive.svg" alt="Back" />
                                        PASO 2 DE 2
                                    </p>
                                </div>
                                <div className="col-7 np">
                                    <div className="progress npud">
                                        <div className="progress-bar d-progressR2" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Steps