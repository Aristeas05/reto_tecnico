import React from "react";
import {NavLink} from "react-router-dom"
import Banner from "../molecules/banner.jsx";
import AutoForm from "../organisms/autoForm.jsx";
import Footer from "../atoms/footer.jsx";
import Plate from '../../redux/store/plate/plate';
import Name from '../../redux/store/name/name';
import Steps from '../molecules/steps';
import ModelPop from '../atoms/modelPop';
import ModelCheckPrice from '../molecules/modelCheckPrice';
import TabChar from '../organisms/tabChar';

const Data = (props) => {

    const [infoValue, setInfoValue] = React.useState(true);
    const [stepValue, setStepValue] = React.useState(0);
    const [yearValue, setYearValue] = React.useState('');
    const [brandValue, setBrandValue] = React.useState('');
    const [totalAmountValue, setTotalAmountValue] = React.useState(20);
    
    const updateTotalAmountValue = (change,amount) => {
        switch (change) {
            case true:
                setTotalAmountValue(totalAmountValue + amount);
                break;
            case false:
                setTotalAmountValue(totalAmountValue - amount);
                break;
        }
    }

    const updateStepValuePlus = () => {
        setStepValue(stepValue + 1);
    }
    const updateStepValueMinus = () => {
        setStepValue(stepValue - 1);
    }

    const updateInfoValue = () => {
        setInfoValue(!infoValue);
        setTotalAmountValue(20);
    }

    const triggerChanges = () => {
        updateInfoValue();
        updateStepValueMinus();
    }

    const chargeNextValues = (year,brand) => {
        setYearValue(year);
        setBrandValue(brand);
    } 

    return(
    <>
        <Banner />
        <section>
            <div className="row nr">
                <Steps presentStep={stepValue} goBackStep={updateStepValueMinus} showInfo={updateInfoValue} />
                {
                    infoValue ? (
                        <div className="col-12 offset-md-1 offset-lg-1 offset-xl-1 col-md-7 col-lg-8 col-xl-7 d-separation d-SidesR">
                            <div className="row nr">
                                <div className="col-12 nplr">
                                    <NavLink className="d-none d-sm-block d-textBack" exact to="/">
                                        <img className="d-backIco" src="../data/back_arrow.svg" alt="Back" />
                                        VOLVER
                                    </NavLink>
                                    <p className="d-text1">
                                        ¡Hola, <span><Name />!</span>
                                    </p>
                                    <p className="d-text2">
                                        Completa los datos de tu auto
                                    </p>
                                </div>
                                <div className="col-12 col-md-7">
                                    <AutoForm 
                                        changeContent={updateInfoValue} 
                                        changeStep={updateStepValuePlus} 
                                        returnFormValues={chargeNextValues}
                                    />
                                </div>
                                <div className="d-none d-sm-block col-12 offset-md-1 col-md-4">
                                    <ModelPop  />
                                </div>
                            </div>
                        </div>
                    ) : 
                    (
                        <>
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
                                            Placa: <Plate />
                                        </p>
                                        <p className="d-boxText2">
                                            {brandValue} {yearValue} <br/> Golf
                                        </p>
                                        <a className="d-textBoxLink2" onClick={triggerChanges}>
                                            EDITAR
                                        </a>
                                        <img className="d-boxImg" src="../data/person.svg" alt="Person" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 offset-md-1 offset-lg-1 offset-xl-1 col-md-7 col-lg-8 col-xl-7 d-separation nplrR">
                                <div className="row nr">
                                    <div className="col-12 nplr d-none d-sm-block">
                                        <span className="d-textBack" onClick={triggerChanges}>
                                            <img className="d-backIco" src="../data/back_arrow.svg" alt="Back" />
                                            VOLVER
                                        </span>
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
                                                Placa: <Plate />
                                                </p>
                                                <p className="d-boxText2">
                                                    {brandValue} {yearValue} Golf
                                                </p>
                                                <a className="d-textBoxLink2" onClick={triggerChanges}>
                                                    EDITAR
                                                </a>
                                            </div>
                                        </div>
                                        <img className="d-boxImg d-none d-sm-block" src="../data/person.svg" alt="Person" />
                                        <div className="row nr">
                                            <div className="col-12 npud">
                                                <p className="d-tabsText">
                                                    Agregar o quitar coberturas
                                                </p>
                                            </div>
                                            <div className="col-12 np d-tabsChanger">
                                                <div>
                                                    <TabChar getEvaluationAmount={updateTotalAmountValue}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 offset-md-1 col-md-4 d-finishR d-SidesR">
                                        <ModelCheckPrice 
                                            actualPrice={totalAmountValue} 
                                            props={props.history}
                                        />
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }                
                <div className="col-12 d-footer d-block d-sm-none">
                    <Footer />
                </div>
            </div>
        </section>
    </>
    );
}

export default Data