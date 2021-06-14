import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Menu from '../Home/Menu'
import Footer from '../Home/Footer'
import Profiles from '../Partenaire/profiles'
import Reservation from "./Reservation"
import {useHistory} from 'react-router-dom'


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
                        <div className="espace_cli bar bar-haut"><Link to="/Client">Mon Profile</Link></div>
                        <div className="espace_cli bar"><Link to="/Reservation">Reservations effectuer</Link></div>
                        <div className="espace_cli bar" onClick={logOut}>Se déconnecter</div>
                    </div>
                    <div className="contain_client">
                        <Switch>
                        <Route exact path="/Client">
                            <Profiles />
                        </Route>
                        <Route path="/Reservation">
                            <Reservation />
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
