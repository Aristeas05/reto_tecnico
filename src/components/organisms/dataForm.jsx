import React from "react";

const DataForm = () => (
    <section>
        <div className="row">
            <div className="col">
                <form action="">
                    <div className="row">
                        <div className="col-12">
                            <p className="df-text">
                                Déjanos tus datos
                            </p>
                        </div>
                        <div className="col-4 df-npr">
                            <select className="df-select" name="documentType" id="documentType" >
                                <option value="DNI">DNI</option>
                                <option value="PASAPORTE">Pasaporte</option>
                                <option value="OTROS">Otros</option>
                            </select>
                        </div>
                        <div className="col-8 df-npl">
                        <input className="df-inputSelect" type="input" placeholder="Nro. de doc "/>
                        </div>
                        <div className="col-12">
                            <input className="df-input" type="input" placeholder="Celular"/>
                        </div>
                        <div className="col-12">
                            <input className="df-input" type="input" placeholder="Placa"/>
                        </div>
                        <div className="col-12">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label className="form-check-label df-checkText" for="flexCheckChecked">
                            Acepto la <span className="df-checkTextIn">Política de Protecciòn de Datos Personales</span> y los <span>Términos y Condiciones.</span>
                            </label>
                        </div>
                        <div className="col-12">
                            <button className="df-button">
                                COTÍZALO
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
)

export default DataForm