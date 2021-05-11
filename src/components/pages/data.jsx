import React from "react";
import Banner from "../molecules/banner.jsx";
import AutoForm from "../organisms/autoForm.jsx";
import Footer from "../atoms/footer.jsx";
import CustomizedSwitches from "../atoms/responsiveSwitch.jsx";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
// Selects Material UI
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));

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
////////
// Tabs Material UI
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

////////
const Data = () => {
    // consts select
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    // consts tabs
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };
    //
    return(
    <>
        <Banner />
        <section>
            <div className="row nr">
                <div className="d-none d-sm-block col-12 col-md-3 col-lg-2 col-xl-3 d-back">
                    <div className="d-changer d-separation">
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                <Typography>{getStepContent(index)}</Typography>
                                <div>
                                    <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >
                                        Back
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                    </div>
                                </div>
                                </StepContent>
                            </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={handleReset} className={classes.button}>
                                Reset
                            </Button>
                            </Paper>
                        )}
                    </div>
                </div>
                <div className="d-separationR d-SidesR col-12 d-block d-sm-none">
                    <div className="row nr np">
                        <div className="col-5 np">
                            <p className="d-stepTextR">
                                <img className="d-backIco" src="../data/back_arrow_responsive.svg" alt="" />
                                PASO 1 DE 2
                            </p>
                        </div>
                        <div className="col-7 np">
                            <div class="progress npud">
                                <div class="progress-bar d-progressR" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*
                <div className="col-12 offset-md-1 offset-lg-1 offset-xl-1 col-md-7 col-lg-8 col-xl-7 d-separation d-SidesR">
                    <div className="row nr">
                        <div className="col-12 nplr">
                            <p className="d-none d-sm-block d-textBack">
                                <img className="d-backIco" src="../data/back_arrow.svg" alt="" />
                                VOLVER
                            </p>
                            <p className="d-text1">
                                ¡Hola, <span>Juan!</span>
                            </p>
                            <p className="d-text2">
                                Completa los datos de tu auto
                            </p>
                        </div>
                        <div className="col-12 col-md-7">
                            <AutoForm />
                        </div>
                        <div className="d-none d-sm-block col-12 offset-md-1 col-md-4">
                            <p className="d-textBox">
                                AYUDA
                            </p>
                            <div className="row nr d-textBoxProps">
                                <div className="col-8 d-textBoxTip">
                                    <p className="d-textBox2">
                                        ¿No encuentras el modelo?
                                    </p>
                                    <a className="d-textBoxLink" href="">
                                        CLIC AQUÍ
                                    </a>
                                </div>
                                <div className="col-4 d-textBoxImg">
                                    <img src="../data/icon_car.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                */}
                <div className="col-12 d-footer d-block d-sm-none d-backR d-SidesR">
                    <div className="row nr">
                        <div className="col-12 np">
                            <p className="d-text1">
                                Mira las coverturas
                            </p>
                            <p className="d-text2b">
                                Conoce las coberturas para tu plan
                            </p>
                        </div>
                        <div className="col-12 d-tipBoxR">
                            <p className="d-boxText1">
                                Placa: C2U-114
                            </p>
                            <p className="d-boxText2">
                                Wolkswagen 2019 <br/> Golf
                            </p>
                            <a className="d-textBoxLink2">
                                EDITAR
                            </a>
                            <img className="d-boxImg" src="../data/person.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-12 offset-md-1 offset-lg-1 offset-xl-1 col-md-7 col-lg-8 col-xl-7 d-separation nplrR">
                    <div className="row nr">
                        <div className="col-12 nplr d-none d-sm-block">
                            <p className="d-textBack">
                                <img className="d-backIco" src="../data/back_arrow.svg" alt="" />
                                VOLVER
                            </p>
                            <p className="d-text1">
                                Mira las coverturas
                            </p>
                            <p className="d-text2">
                                Conoce las coberturas para tu plan
                            </p>
                        </div>
                        <div className="col-12 col-md-7 nplr">
                            <div className="row nr d-borderBox d-none d-sm-block">
                                <div className="col-6">
                                    <p className="d-boxText1">
                                    Placa: C2U-114
                                    </p>
                                    <p className="d-boxText2">
                                        Wolkswagen 2019 Golf
                                    </p>
                                    <a className="d-textBoxLink2">
                                        EDITAR
                                    </a>
                                </div>
                            </div>
                            <img className="d-boxImg d-none d-sm-block" src="../data/person.svg" alt="" />
                            <div className="row nr">
                                <div className="col-12 npud">
                                    <p class="d-tabsText">
                                        Agregar o quitar coberturas
                                    </p>
                                </div>
                                <div className="col-12 np d-tabsChanger">
                                    <div className={classes.root}>
                                        <AppBar position="static">
                                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                            <Tab label="PROTEGE TU AUTO" {...a11yProps(0)} />
                                            <Tab label="PROTEGE A LOS QUE TE RODEAN" {...a11yProps(1)} />
                                            <Tab label="MEJORA TU PLAN" {...a11yProps(2)} />
                                            </Tabs>
                                        </AppBar>
                                        <TabPanel className="d-SidesR" value={value} index={0}>
                                            <Accordion>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                >
                                                    <Typography className={classes.heading}>
                                                        <div class="row nr np">
                                                            <div className="col-2 d-icoDrop">
                                                                <img src="icon_theft.svg" alt="" />
                                                            </div>
                                                            <div className="col-8 col-sm-10 col-lg-7 col-xl-6">
                                                                <p className="d-dropdown-title">
                                                                    Llanta robada
                                                                </p>
                                                                <p className="d-dropdown-action d-none d-sm-block">
                                                                    <RemoveCircleOutlineIcon /> QUITAR
                                                                </p>
                                                                <a className="d-textBoxLink2 d-block d-sm-none">
                                                                    VER MÁS <ExpandMoreIcon />
                                                                </a>
                                                            </div>
                                                            <div className="col-2 d-block d-sm-none">
                                                                <CustomizedSwitches />
                                                            </div>
                                                        </div>
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        <div class="row nr np">
                                                            <div className="offset-2 col-10 col-md-9 np">
                                                                <p className="d-dropdown-text">
                                                                He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                >
                                                    <Typography className={classes.heading}>
                                                        <div class="row nr np">
                                                            <div className="col-2 d-icoDrop">
                                                                <img src="icon_damage.svg" alt="" />
                                                            </div>
                                                            <div className="col-8 col-sm-10 col-md-8">
                                                                <p className="d-dropdown-title">
                                                                    Choque y/o pasarte la luz roja 
                                                                </p>
                                                                <p className="d-dropdown-action d-none d-sm-block">
                                                                    <AddCircleOutlineIcon/> AGREGAR
                                                                </p>
                                                                <a className="d-textBoxLink2 d-block d-sm-none">
                                                                    VER MÁS <ExpandMoreIcon />
                                                                </a>
                                                            </div>
                                                            <div className="col-2 d-block d-sm-none">
                                                                <CustomizedSwitches />
                                                            </div>
                                                        </div>
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        <div class="row nr np">
                                                            <div className="offset-2 col-10 col-md-9 np">
                                                                <p className="d-dropdown-text">
                                                                He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                            <Accordion>
                                                <AccordionSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1a-content"
                                                id="panel1a-header"
                                                >
                                                    <Typography className={classes.heading}>
                                                        <div class="row nr np">
                                                            <div className="col-2 d-icoDrop">
                                                                <img src="icon_perdidatotal.svg" alt="" />
                                                            </div>
                                                            <div className="col-8 col-sm-10 col-lg-7 col-xl-6">
                                                                <p className="d-dropdown-title">
                                                                    Atropello en la vía Evitamiento 
                                                                </p>
                                                                <p className="d-dropdown-action d-none d-sm-block">
                                                                    <AddCircleOutlineIcon/> AGREGAR
                                                                </p>
                                                                <a className="d-textBoxLink2 d-block d-sm-none">
                                                                    VER MÁS <ExpandMoreIcon />
                                                                </a>
                                                            </div>
                                                            <div className="col-2 d-block d-sm-none">
                                                                <CustomizedSwitches />
                                                            </div>
                                                        </div>
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography>
                                                        <div class="row nr np">
                                                            <div className="offset-2 col-10 col-md-9 np">
                                                                <p className="d-dropdown-text">
                                                                He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis y mucho más
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        </TabPanel>
                                        <TabPanel value={value} index={1}>
                                            Item Two
                                        </TabPanel>
                                        <TabPanel value={value} index={2}>
                                            Item Three
                                        </TabPanel>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 offset-md-1 col-md-4 d-finishR d-SidesR">
                            <div className="row nr">
                                <div className="col-5 col-md-7 np">
                                    <p className="d-textBox3">
                                        $35.00
                                    </p>
                                    <p className="d-textBox4">
                                        mensuales
                                    </p>
                                </div>
                                <div className="d-none d-sm-block col-5 np d-ico">
                                    <img src="../data/protect_logo.svg" alt="" />
                                </div>
                                <div className="d-none d-sm-block col-12 nplr d-textBoxProps2">
                                    <p className="d-textBox2">
                                        El precio incluye:
                                    </p>
                                    <p className="d-textBox5">
                                        <CheckIcon /> Llanta de respuesto
                                    </p>
                                    <p className="d-textBox5">
                                        <CheckIcon /> Analisis de motor
                                    </p>
                                    <p className="d-textBox5">
                                        <CheckIcon /> Aros gratis
                                    </p>
                                </div>
                                <div className="col-7 col-md-12 np">
                                    <button className="d-button">
                                        LO QUIERO
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 d-footer d-block d-sm-none">
                    <Footer />
                </div>
            </div>
        </section>
    </>
    );
}


export default Data