import React from "react";
import CallUs from '../atoms/callUs.jsx';
import Logo from '../atoms/logo.jsx';
import DataForm from '../organisms/dataForm.jsx';
import Footer from '../atoms/footer.jsx';

const Home = (props) => (
    <div className="row nr">
        <div className="col col-sm-5 h-back1 d-none d-sm-block" style={{backgroundImage: `url(./home/background.svg)`}}>
            <div className="row">
                <Logo />
                <div className="col-12 h-imageContainer">
                    <img src="./home/principal_image.svg" alt="Principal" className="h-imagePrincipal"/>
                </div>
                <div className="col-md-9 col-lg-8 col-xl-7  col-xxl-6 offset-md-2 offset-lg-3 offset-xl-3 offset-xxl-4 h-banner2">
                    <p className="h-text1">
                        ¡NUEVO!
                    </p>
                    <p className="h-text2">
                        Seguro <span className="h-textMarked">Vehicular Tracking</span>
                    </p>
                    <p className="h-text3">
                        Cuentanos donde le haras seguimiento a tu seguro
                    </p>
                </div>
                <div className="col-10 offset-lg-2">
                    <Footer />
                </div>
            </div>
        </div>
        <div className="col d-block d-sm-none h-backR">
            <div className="row nr">
                <div className="col-6 h-logoR">
                    <Logo />
                </div>
                <div className="col-6 h-callR">
                    <CallUs className="d-none d-sm-block" />
                </div>
                <div className="col-8 h-areaR">
                    <p className="h-text1">
                        ¡NUEVO!
                    </p>
                    <p className="h-text2">
                        Seguro Vehicular<span className="h-textMarked"> Tracking</span>
                    </p>
                    <p className="h-text3">
                        Cuentanos donde le haras seguimiento a tu seguro
                    </p>
                    <img className="h-imageR" src="./home/principal_image_responsive.svg" alt="Principal" />
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-7 h-formR">
            <div className="d-none d-sm-block" >
                <CallUs />
            </div>
            <div className="row">
                <div className="offset-sm-2 offset-md-2 offset-lg-3 offset-xl-3 col-sm-8 col-md-7 col-lg-6 col-xl-5 ">
                    <DataForm history={props.history} />
                </div>
            </div>
        </div>
    </div>
)

export default Home