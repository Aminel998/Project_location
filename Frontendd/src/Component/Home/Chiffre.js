import React, { Component } from 'react'
import './css/Chiffre.css';
import like from './img/like.svg' ;
import phone from './img/phone-call.svg' ;
import price from './img/price-tag.svg' ;
import shield from './img/secure-shield.svg' ;
import lay01 from './img/lay01.png' ;
import lay02 from './img/lay02.png' ;
import lay03 from './img/lay03.png' ;

export class Chiffre extends Component {
    render() {
        return (
            <div>
                <div className="triangle">
                </div>
                <div className="chiffre">
                    <div className="chiffre-text">
                        <div className="chiffre-title">
                            Autostar Rental Service <br/>
                        With a wide range of Vehicles</div>
                        <div className="body-chiffre">
                            <p>
                                Integer tortor bibendum est faucibus gravida aliquam nulla lectus lacinia eget <br/>
                                lorem acdua eros pharetral interdum quisque convallis nula dpsum val mualiq <br/>
                                amet consectetur adipisicing sed eiusmod tem pory.
                            </p>
                            <p>
                                Ut enim ad minim ven quis nostrud exercitation ulamco laboris nisi ut aliquip exl <br/>
                                dolor in reprehenderit voluptate velit non proident sunt in culpa.
                            </p>
                        </div>
                        <div className="point-fort">
                            <div className="easy fl">
                                <div className="glob1">
                                    <img src={price} alt="" width="35px" />
                                </div>
                                <div className="glob2">
                                <div className="minititle">
                                    <p className="first-mini">Easy & Competitive Prices</p>
                                    <p className="second-mini">Faucibus gravida aliquam nulla lectus lacinia eget</p>
                                </div>
                                </div>
                            </div>
                            <div className="break fl">
                            <div className="glob1">
                                    <img src={shield} alt="" width="35px" />
                                </div>
                                <div className="glob2">
                                <div className="minititle">
                                    <p className="first-mini">Breakdown Assistance</p>
                                    <p className="second-mini">Faucibus gravida aliquam nulla lectus lacinia eget</p>
                                </div>
                                </div>
                            </div>
                            <div className="trusted fl">
                            <div className="glob1">
                                    <img src={like} alt="" width="35px" />
                                </div>
                                <div className="glob2">
                                <div className="minititle">
                                    <p className="first-mini">24/7 Free Customer Support</p>
                                    <p className="second-mini">Faucibus gravida aliquam nulla lectus lacinia eget</p>
                                </div>
                                </div>
                            </div>
                            <div className="costum fl">
                            <div className="glob1">
                                    <img src={phone} alt="" width="35px" />
                                </div>
                                <div className="glob2">
                                <div className="minititle">
                                    <p className="first-mini">Easy & Competitive Prices</p>
                                    <p className="second-mini">Faucibus gravida aliquam nulla lectus lacinia eget</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chiffre-img">
                        <div className="lay1"><img src={lay01} alt=""/></div>
                        <div className="lay2"><img src={lay02} alt=""/></div>
                        <div className="lay3"><img src={lay03} alt=""/></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chiffre
