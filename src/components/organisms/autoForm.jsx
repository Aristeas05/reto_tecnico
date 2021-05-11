import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
const AutoForm = () => {
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
    const [year, setYear] = React.useState('');
    const [brand, setBrand] = React.useState('');

    const handleChange = (event) => {
        setYear(event.target.value);
    };
    const handleSwap = (event) => {
        setBrand(event.target.value);
    }
    return(
        <div className="row">
            <form action="">
                <div className="row npud">
                    <div className="col-12 nplr af-formChanger npud">
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="year">Año</InputLabel>
                            <Select
                            labelId="year"
                            id="year"
                            value={year}
                            onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>2019</MenuItem>
                                <MenuItem value={20}>2020</MenuItem>
                                <MenuItem value={30}>2021</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="filled" className={classes.formControl}>
                            <InputLabel id="brand">Marca</InputLabel>
                            <Select
                            labelId="brand"
                            id="brand"
                            value={brand}
                            onChange={handleSwap}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={1}>Wolkswagen</MenuItem>
                                <MenuItem value={2}>Audi</MenuItem>
                                <MenuItem value={3}>Toyota</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="col-12 af-backR np d-block d-sm-none">
                        <div className="row nr">
                            <div className="col-4">
                                <img className="af-icoR" src="../data/icon_car.svg" alt="" />
                            </div>
                            <div className="col-8 nplr">
                                <p className="af-text1R">
                                    ¿No encuentras el modelo?
                                </p>
                                <a className="af-textBoxLinkR" href="">
                                    CLIC AQUÍ
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 af-padR">
                        <p className="af-text1">
                            ¿Tu auto es a gas?
                        </p>
                    </div>
                    <div className="col-12 col-lg-6 af-changer">
                        <RadioGroup row aria-label="position" name="position" defaultValue="top">
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
                            <button className="af-buttonMinus"><RemoveIcon/></button>
                            <span>$13300</span>
                            <button className="af-buttonPlus"><AddIcon/></button>
                        </div>
                    </div>
                    <div className="col-12 nplr">
                        <button className="af-button">
                            CONTINUAR <ArrowForwardIosIcon></ArrowForwardIosIcon>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AutoForm