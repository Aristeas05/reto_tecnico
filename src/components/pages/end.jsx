import React from "react";
import Banner from "../molecules/banner.jsx";
import Footer from "../atoms/footer.jsx";
import {useSelector} from 'react-redux';

const End = (props) => {

    const userInfo = useSelector(state => state.nameReducer );
    const userPlate = useSelector(state => state.plateReducer );
    
    if (userInfo.name === '' || userPlate.plate === '') {
        props.history.push('/');
    }

    return(
        <>
            <Banner />
            <section>
                <div className="row nr">
                    <div className="col-12 col-sm-3 col-md-4 e-back e-separationR">
                        <img className="e-img d-none d-sm-block" src="../end/end_image.svg" alt="End" />
                        <img className="e-imgR d-block d-sm-none" src="../end/end_image_responsive.svg" alt="End" />
                    </div>
                    <div className="col-12 col-sm-9 col-md-8 e-separation">
                        <div className="row nr">
                            <div className="col-12 offset-sm-3 col-sm-8 offset-lg-3 col-lg-7 np">
                                <p className="e-text1">
                                    ¡Te damos la bienvenida!
                                </p>
                                <p className="e-text2">
                                    Cuenta con nosotros para proteger tu vehículo
                                </p>
                                <p className="e-text3">
                                    Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo:
                                </p>
                                <p className="e-text3">
                                    joel.sanchez@gmail.com
                                </p>
                                <button className="e-button">
                                    CÓMO USAR MI SEGURO
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 e-footer  d-block d-sm-none">
                        <Footer />
                    </div>
                </div>
            </section>
        </>
    )
}
export default End