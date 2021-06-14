import React, {} from 'react'
import Menu from '../Home/Menu'
import   './css/Client.css'
import Footer from '../Home/Footer'
import Profiles from './profiles'
import Reservation from "./Reservation"
import Addannonce from "./Add_annonce"
import Addvoiture from "./add_voiture"
import {useHistory} from 'react-router-dom'

import MesAnnonce from './MesAnnonce'
import MesVoiture from './MesVoiture'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
JSON.parse(localStorage.getItem('user-info'));

function Client() {
    const history = useHistory();
    function logOut(){
        localStorage.clear();
        history.push('/')
    }

        

     
        return (
            <div>
                <div className="firstV">
                <Menu/>
                </div>
                <Router>
                <div className="client_containner">
                    <div className="client_bar">
                        <div className="espace_cli bar bar-haut"><Link to="/Partenaire">Mon Profile</Link></div>
                        <div className="espace_cli bar"><Link to="/Reservation">Reservations Reçues</Link></div>
                        <div className="espace_cli bar" ><Link to="/MesAnnonces">Mes Annonces</Link></div>
                        <div className="espace_cli bar" ><Link to="/MesVoiture">Mes Voitures</Link></div>
                        <div className="espace_cli bar" onClick={logOut}><Link to="/" >Se déconnecter</Link></div>
                    </div>
                    <div className="contain_client">
                        <Switch>
                        <Route exact path="/Partenaire">
                            <Profiles />
                        </Route>
                        <Route path="/Reservation">
                            <Reservation />
                        </Route>
                        <Route path="/Addannonce">
                            <Addannonce  />
                        </Route>
                        <Route path="/Addvoiture">
                            <Addvoiture />
                        </Route>
                        <Route path="/MesVoiture">
                            <MesVoiture  />
                        </Route>
                        <Route path="/MesAnnonces">
                            <MesAnnonce  />
                        </Route>
                        </Switch>
                    </div>
                </div>
                </Router>
                <div className="thelast">
                        <Footer/>
                </div>
            </div>
        )
    
}

export default Client
