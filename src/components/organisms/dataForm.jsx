import React, {useState,useRef} from "react";
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import getUserData from '../services/getUserData';
import updatePlate from '../../redux/store/plate/action';
import updateName from '../../redux/store/name/action';
import {useDispatch} from "react-redux";
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';


const DataForm = (props) => {
    
    const dispatch = useDispatch();
    const plateRef = useRef(null);

    const [document, setdocument] = useState('');
    const [documentValue, setdocumentvalue] = useState('');
    const [cellPhoneValue, setcellphonevalue] = useState('');
    const [plateValue, setplatevalue] = useState('');
    const [checkedValue, setCheckedValue] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const id = open ? 'transitions-popper' : undefined;

    const changeSelectValue = (e) => {
        setdocument(e.target.value);
    };

    const updateDocumentValue = (e) => {
        let newDocument = e.target.validity.valid;
        if(newDocument){
            setdocumentvalue(e.target.value);
        }
    }

    const updateCellPhoneValue = (e) => {
        let newNumber = e.target.validity.valid;
        if(newNumber){
            setcellphonevalue(e.target.value);
        }
    }

    const updatePlateValue = (e) => {
        let newPlate = e.target.validity.valid;
        if(newPlate){
            setplatevalue((e.target.value).toUpperCase());
        }
    }

    const updateCheckedValue = (e) => {
        setCheckedValue(e.target.checked);
      };
    
    const outPoper = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    }

    const validateNextPage = async (e) => {
        let data = '';
        let name = '';
        
        if (documentValue !== '' && cellPhoneValue !== '' && plateValue !== '' && checkedValue === true) {
            setAnchorEl(anchorEl ? null : e.currentTarget);
            data = await getUserData(cellPhoneValue);
            if (data.length !== 0 ) {

                name = data[0].name.slice(0, data[0].name.indexOf(" "));

                dispatch(updatePlate(plateRef.current.value));
                dispatch(updateName(name));

                props.history.push('/data');
            }
            else{
                
                setModalMessage('El número ingresado, no se encuentra dentro del registro');
            }
        }else{
            setAnchorEl(anchorEl ? null : e.currentTarget);
            setModalMessage('Algunos campos requeridos, se encuentran vacios para continuar');
        }
    }    

    return (
        <>
            <section>
                <div className="row">
                    <div className="col-12">
                        <p className="df-text">
                            Déjanos tus datos
                        </p>
                    </div>
                    <div className="col-4 df-npr">
                        <NativeSelect
                            className="df-select"
                            defaultValue={1}
                            id="document"
                            value={document}
                            onChange={changeSelectValue}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={1}>DNI</option>
                        </NativeSelect>
                    </div>
                    <div className="col-8 df-npl">
                        <input 
                            className="df-inputSelect" 
                            type="text" 
                            placeholder="Nro. de doc." 
                            pattern="[0-9]{0,8}"
                            value={documentValue}
                            onChange={updateDocumentValue}
                        />
                    </div>
                    <div className="col-12">
                        <input 
                            className="df-input" 
                            type="text" 
                            placeholder="Celular"
                            value={cellPhoneValue}
                            onChange={updateCellPhoneValue}
                            pattern="[().x-x0-9- ]{0,30}" 
                        />
                    </div>
                    <div className="col-12">
                        <input 
                            className="df-input" 
                            type="text" 
                            placeholder="Placa"
                            pattern="[a-zA-Z0-9-]{0,7}"
                            value={plateValue}
                            ref={plateRef}
                            onChange={updatePlateValue}
                        />
                    </div>
                    <div className="col-12">
                        <Checkbox
                            className="form-check-input" 
                            checked={checkedValue}
                            onChange={updateCheckedValue}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                        <label className="form-check-label df-checkText">
                            Acepto la <span className="df-checkTextIn">Política de Protecciòn de Datos Personales</span> y los <span>Términos y Condiciones.</span>
                        </label>
                    </div>
                    <div className="col-12">
                        <Button 
                            className="df-button"
                            variant="contained"
                            onClick={validateNextPage}
                        >
                            COTÍZALO
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
            </section>
        </>
    )
}

export default DataForm;