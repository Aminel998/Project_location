import React, {  } from 'react'
import './css/Menu.css';
import { Link } from 'react-router-dom';
import mylogo from './img/logo.png';


function Menu() {
    //console.log("my props"+props.result)
    
    let user = JSON.parse(localStorage.getItem('user-info'));
    
        return (
     <nav className="poss" >
        <div className="myMenu">
            <a className="pil pil_push" href="/"><img src={mylogo} width="120px" alt=""/></a>
           {/* <img src={(user == null)?" " : require('./img/'+user.image).default} style={{
          borderRadius: "50%",
          width: 50,
          height: 50,
        }} alt=''  />*/}
            <button hidden = {(user == null)? "hidden" :(user.function === 1 )? "":"hidden" }><Link className="pil" to="/Partenaire">Profile partenaire</Link></button>
            <button hidden = {(user == null)? "hidden" :(user.function === 0 )? "":"hidden" }><Link className="pil" to="/client">Profile Client</Link></button>
            <div className="" id="navbarNav">
            <ul className="">
                <li className="">
                <a className="pil"  href="/">Home</a>
                </li>
                <li className="">
                <Link className="pil" to="/vitrine">Vitrine</Link>
                </li>
                <li className="">
                <Link className="pil" to="/Reservation">About us</Link>
                </li>
                <li className="">
                <a className="pil" href="/third">Pricing</a>
                </li>
            </ul>
            </div>
        </div>
     </nav>
        )
    
}

export default Menu
