import React, { Component } from 'react'
import   '../Partenaire/css/profiles.css'
import   './css/Reservation.css'
//import BasicTable from './BasicTable'
//import FiltringTable from './FiltringTable'  
import PaginationTable from './PaginationTable'
export class reservation extends Component {
    render() {
        return (
            <div className="myreservation">
                 <div className="nom_client">
                  <span>La liste des reservations reçues</span>
                 </div>
                 <div className="table_containt">
                     <PaginationTable/>
                 </div>
            </div>
        )
    }
}

export default reservation
