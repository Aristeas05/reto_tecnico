import React from 'react';
import { NavLink } from 'react-router-dom';

const ModelPop = () => {

    return(
        <>
            <div className="d-none d-sm-block np">
                <p className="d-textBox">
                    AYUDA
                </p>
                <div className="row nr d-textBoxProps">
                    <div className="col-8 d-textBoxTip">
                        <p className="d-textBox2">
                            ¿No encuentras el modelo?
                        </p>
                        <NavLink className="d-textBoxLink" to="/">
                            CLIC AQUÍ
                        </NavLink>
                    </div>
                    <div className="col-4 d-textBoxImg">
                        <img src="../data/icon_car.svg" alt="Car" />
                    </div>
                </div>
            </div>
            <div className="af-backR np d-block d-sm-none">
                <div className="row nr">
                    <div className="col-4">
                        <img className="af-icoR" src="../data/icon_car.svg" alt="Car" />
                    </div>
                    <div className="col-8 nplr">
                        <p className="af-text1R">
                            ¿No encuentras el modelo?
                        </p>
                        <NavLink className="af-textBoxLinkR" to="/">
                            CLIC AQUÍ
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModelPop