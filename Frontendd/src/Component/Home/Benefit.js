import React, { Component } from 'react'
import './css/Benefit.css';
import satisfaction from './img/satisfaction.svg';
import pencil from './img/pencil.svg';
import location from './img/location.svg';
export class Benefit extends Component {
    render() {
        return (
            <div className="mycop">
                <div className="minitile">
                    <span className="benef-title">OUR BENEFITS</span> <br/>
                    <span className="benef-second">Luxury AutoStar Rental Services</span>
                </div>
                <div className="devlop-benef">
                    <div className="card text-center" >
                        <div className="card-body">
                        <img src={satisfaction} alt="" width="60px"/>
                            <div className="card-title">Our Customers Always <br/>100% Satisfied</div>
                            <hr/>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</p>
                        </div>
                    </div>
                    <div className="card text-center" >
                        <div className="card-body">
                        <img src={pencil} alt="" width="60px"/>
                        <div className="card-title">We Provide Easier <br/>& Faster Bookings</div>
                        <hr/>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</p>
                        </div>
                    </div>
                    <div className="card text-center" >
                        <div className="card-body">
                        <img src={location} alt="" width="60px"/>
                        <div className="card-title">Your Choice of<br/>Any Pickup Location</div>
                        <hr/>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit sed don eiusmod tempor enim minim veniam quis notrud exercitation</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Benefit
