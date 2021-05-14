import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';

const ModelCheckPrice = ({actualPrice,props}) => {
    
    const goToLastPage = () =>{
        console.log(props);
        props.push('/end');
    }

    return (
        <div className="row nr">
            <div className="col-5 col-md-7 np">
                <p className="d-textBox3">
                    $ {actualPrice}
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
                <Button className="d-button" onClick={goToLastPage}>
                    LO QUIERO
                </Button>
            </div>
        </div>
    );
}

export default ModelCheckPrice;