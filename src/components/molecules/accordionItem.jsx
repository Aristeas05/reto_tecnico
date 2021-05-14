import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles} from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import CustomizedSwitches from "../atoms/responsiveSwitch.jsx";
import Typography from '@material-ui/core/Typography';

const AccordionItem = ({evaluateAmountAction}) => {
    
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
        },
        selectEmpty: {
          marginTop: theme.spacing(2),
        },
      }));
    
    const classes = useStyles();

    const [additionalAmountValue1, setAdditionalAmount1] = React.useState(false);
    const [additionalAmountValue2, setAdditionalAmount2] = React.useState(false);
    const [additionalAmountValue3, setAdditionalAmount3] = React.useState(false);

    const changeBaseAmountValue = (card) => {
        console.log(card);
        switch (card) {
            case '1':
                    setAdditionalAmount1(!additionalAmountValue1);
                    console.log(additionalAmountValue1);
                    evaluateAmountAction(!additionalAmountValue1, 15);
                break;
            case '2':
                    setAdditionalAmount2(!additionalAmountValue2);
                    console.log(additionalAmountValue2);
                    evaluateAmountAction(!additionalAmountValue2, 20);
            break;
            case '3':
                    setAdditionalAmount3(!additionalAmountValue3);
                    console.log(additionalAmountValue3);
                    evaluateAmountAction(!additionalAmountValue3, 50);
            break;
        }
    }

    return(
        <>
            <a className="d-dropdown-action1 d-none d-sm-none d-md-block" onClick={() => changeBaseAmountValue('1')}>
                {
                    additionalAmountValue1 ? (
                        <>
                            <RemoveCircleOutlineIcon/> <span>QUITAR</span>
                        </>
                        
                    ):
                    (
                        <>
                            <AddCircleOutlineIcon/> <span>AGREGAR</span>
                        </>
                    )
                }
            </a>
            <div className="d-block d-sm-none ai-switchItemR">
                <CustomizedSwitches passValues={() => changeBaseAmountValue('1')}/>
            </div>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        <div className="row nr np ai-space">
                            <div className="col-2 d-icoDrop">
                                <img src='../data/icon_theft.svg' alt="" />
                            </div>
                            <div className="col-8 col-sm-10 col-lg-7 col-xxl-6">
                                <p className="d-dropdown-title">
                                    Llanta robada
                                </p>
                                <a className="d-textBoxLink2 d-block d-sm-none">
                                    VER MÁS <ExpandMoreIcon />
                                </a>
                            </div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="row nr np">
                            <div className="offset-2 col-10 col-md-9 np">
                                <p className="d-dropdown-text">
                                    He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más
                                </p>
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <a className="d-dropdown-action2 d-none d-sm-none d-md-block" onClick={() => changeBaseAmountValue('2')}>
                {
                    additionalAmountValue2 ? (
                        <>
                            <RemoveCircleOutlineIcon/> <span>QUITAR</span>
                        </>
                        
                    ):
                    (
                        <>
                            <AddCircleOutlineIcon/> <span>AGREGAR</span>
                        </>
                    )
                }
            </a>
            <div className="d-block d-sm-none ai-switchItemR">
                <CustomizedSwitches passValues={() => changeBaseAmountValue('2')}/>
            </div>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        <div className="row nr np ai-space">
                            <div className="col-2 d-icoDrop">
                                <img src='../data/icon_damage.svg' alt="" />
                            </div>
                            <div className="col-8 col-sm-10 col-lg-7 col-xxl-6">
                                <p className="d-dropdown-title">
                                    Choque y/o pasarte la luz roja
                                </p>
                                <a className="d-textBoxLink2 d-block d-sm-none">
                                    VER MÁS <ExpandMoreIcon />
                                </a>
                            </div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="row nr np">
                            <div className="offset-2 col-10 col-md-9 np">
                                <p className="d-dropdown-text">
                                    He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más
                                </p>
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <a className="d-dropdown-action2 d-none d-sm-none d-md-block" onClick={() => changeBaseAmountValue('3')}>
                {
                    additionalAmountValue3 ? (
                        <>
                            <RemoveCircleOutlineIcon/> <span>QUITAR</span>
                        </>
                        
                    ):
                    (
                        <>
                            <AddCircleOutlineIcon/> <span>AGREGAR</span>
                        </>
                    )
                }
            </a>
            <div className="d-block d-sm-none ai-switchItemR">
                <CustomizedSwitches passValues={() => changeBaseAmountValue('3')}/>
            </div>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography className={classes.heading}>
                        <div className="row nr np ai-space">
                            <div className="col-2 d-icoDrop">
                                <img src='../data/icon_perdidatotal.svg' alt="" />
                            </div>
                            <div className="col-8 col-sm-10 col-lg-7 col-xxl-6">
                                <p className="d-dropdown-title">
                                    Atropello en la vía Evitamiento
                                </p>
                                <a className="d-textBoxLink2 d-block d-sm-none">
                                    VER MÁS <ExpandMoreIcon />
                                </a>
                            </div>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <div className="row nr np">
                            <div className="offset-2 col-10 col-md-9 np">
                                <p className="d-dropdown-text">
                                    He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más
                                </p>
                            </div>
                        </div>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
         
    );
}

export default AccordionItem 