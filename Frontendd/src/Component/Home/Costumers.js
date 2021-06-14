import React, { Component } from 'react'
import './css/Costumers.css';
import CountUp from 'react-countup';

export class Costumers extends Component {
    render() {
        return (
            <div className="costumers">
                <div className="title-costum">
                    <div className="first-title">SOME NUMBERS</div>
                    <div className="second-title">Luxury AutoStar Rental Services</div>
                </div>
                <div className="global_numbers">
                    <div className="chiffre1">
                        <div className="col">
                            <CountUp className="num" end={120} duration={5}/> 
                            <div className="num_descri">Agent partenaire</div>
                        </div>
                        <div className="col">
                        <i className="fa fa-plus upgrade fon1"></i>
                        <CountUp className="num" end={360} duration={5} /> 
                            <div className="num_descri">Clients satisfaits</div>
                        </div>
                        <div className="col">
                            <i className="fa fa-plus upgrade fon2" ></i>
                            <CountUp className="num" end={300} duration={5} /> 
                            <div className="num_descri">Location mensuellement </div>
                        </div>
                    </div>
                    <div className="chiffre2">
                        <div className="col">
                        <CountUp className="num" end={20} duration={5} /> 
                            <div className="num_descri">Mark de voiture</div>
                        </div>
                        <div className="col">
                                <div className="num_excep">
                                <CountUp className="num" end={5000} duration={5} /> 
                                    <div className="num_end"></div>
                                </div>
                            <div className="num_descri">Location Annuelle</div>
                        </div>
                    </div>
                </div>    
            </div>
        )
    }
}

export default Costumers
