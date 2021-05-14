import React from "react";
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import ModelPop from '../atoms/modelPop';
import AutoFormImput from '../molecules/autoFormInput';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';

const AutoForm = ({changeContent,changeStep,returnFormValues}) => {

    const yearValues = ['2018','2019','2020','2021'];
    const brandValues = ['Wolkswagen','Audi','Toyota','Nissan'];
    const [payValue, setPayValue] = React.useState(13300);
    const [yearValue, setYearValue] = React.useState('');
    const [brandValue, setBrandValue] = React.useState('');
    const [gasValue, setGasValue] = React.useState('');
    const [modalMessage, setModalMessage] = React.useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;

    const outPoper = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    }

    const decreaseAmountValue = () => {
        if ( payValue > 12500 ) {
            setPayValue(payValue - 100);
        }
    }
 
    const increaseAmountValue = () => {
        if ( payValue < 16500 ) {
            setPayValue(payValue + 100);
        }
    }

    const giveBackThatYear = (item) => {
        setYearValue(item);
    }

    const giveBackThatBrand = (item) => {
        setBrandValue(item);
    }

    const giveRadioVal = (e) => {
        setGasValue( e.target.value);
    }

    const triggerChanges = (e) => {
        if (yearValue !== '' && brandValue !== '' && gasValue !== '') {
            changeContent();
            changeStep();
            returnFormValues(yearValue,brandValue);
        }else{
            setAnchorEl(anchorEl ? null : e.currentTarget);
            setModalMessage('Algunos campos requeridos, se encuentran vacios para continuar');
        }
    }

    return(
        <div className="row">
            <form action="">
                <div className="row npud">
                    <div className="col-12 nplr af-formChanger npud">
                        <AutoFormImput name={'Año'}id={'year'} values={yearValues} returnValue={giveBackThatYear}/>
                        <AutoFormImput name={'Marca'}id={'brand'} values={brandValues} returnValue={giveBackThatBrand}/>
                    </div>
                    <div className="d-block d-sm-none np col-12 ">
                        <ModelPop />
                    </div>
                    <div className="col-12 col-lg-6 af-padR">
                        <p className="af-text1">
                            ¿Tu auto es a gas?
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 af-changer">
                        <RadioGroup row aria-label="position" name="position" defaultValue="top" onChange={giveRadioVal}>
                            <FormControlLabel value="Si" control={<Radio color="primary" />} label="Si" />
                            <FormControlLabel value="No" control={<Radio color="primary" />} label="No" />
                        </RadioGroup>
                    </div>
                    <div className="row nr af-border nplr">
                        <div className="col-12 col-lg-7 nplr af-padR">
                            <p className="af-priceTitle">
                                Indica la suma asegurada
                            </p>
                            <p className="af-priceRange">
                                MIN $12,500 | MAX $16,500
                            </p>
                        </div>
                        <div className="col-12 col-lg-5 af-buttonChanger nplr">
                            <Button onClick={decreaseAmountValue} className="af-buttonMinus"><RemoveIcon/></Button>
                            <span className="af-spanVal">$ {payValue}</span>
                            <Button onClick={increaseAmountValue} className="af-buttonPlus"><AddIcon/></Button>
                        </div>
                    </div>
                    <div className="col-12 nplr">
                        <Button 
                            className="af-button"
                            variant="contained"
                            onClick={triggerChanges}
                        >
                            CONTINUAR <ArrowForwardIosIcon></ArrowForwardIosIcon>
                        </Button>
                        <Popper onMouseOut={outPoper} id={id} open={open} anchorEl={anchorEl} transition>
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <div className='df-poper'>{modalMessage}</div>
                                </Fade>
                            )}
                        </Popper>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AutoForm