import React, { Component } from 'react'
import './css/Initial.css';
import Menu from './Menu'
import Login from './Login'
import Benefit from './Benefit';
import Chiffre from './Chiffre';
import Costumers from "./Costumers";
import FAQ from "./FAQ";
import Footer from './Footer';
export class Initial extends Component {
    render() {
        return (
            <div>
                <div className="firstcompo">
                <Menu/>
                <div className="position1">
                    <Login/>
                </div>
                <div className="position2">
                    <div className="title">
                        Book your auto rental
                    </div>
                    <div className="mini-title">
                    Luxury Cars at low-cost, starts <span> 75DH / day</span><br/>
                    from over 100  locations
                    </div>
                </div>
                </div>
                <div className="secondcompo">
                    <Benefit/>
                </div>
                <div className="thirdcompo">
                    <Chiffre/>
                </div>
                <div className="forthcompo">
                    <Costumers/>
                </div>
                <div className="fifthcompo">
                    <FAQ/>
                </div>
                <div className="thelast">
                 <Footer/>
                </div>
            </div>
        )
    }
}

export default Initial
