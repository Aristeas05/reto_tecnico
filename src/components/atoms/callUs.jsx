import React from 'react';

const CallUs = () => (
    <>
        <div className="row cu-back col d-none d-sm-block npud">
            <div className="col-md-8 col-lg-7 offset-md-4 offset-lg-5 npud">
                <div className="row">
                    <div className="col">
                        <p className="cu-text">¿Tienes alguna duda?</p>
                    </div>
                    <div className="col">
                        <p className="cu-phoneNumber"><img className="cu-phoneIco" src="./ic_phone.svg" alt="" /> (01) 411 6001</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-block d-sm-none np">
            <p className="cu-phoneNumber"><img className="cu-phoneIco" src="./ic_phone.svg" alt="" /> Llámanos</p>
        </div>
    </>
)
export default CallUs