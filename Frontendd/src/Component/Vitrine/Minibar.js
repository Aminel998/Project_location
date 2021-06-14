import React, { Component } from 'react'
import   './css/Minibar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';

export class Minibar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light ">
                    <div>
                        <a href="/" className="text-reset">
                        <FontAwesomeIcon icon={faHome} />
                        </a>     
                        <a className="navbar-brand" href="/"> Car Dealer</a>
                        {'>'}
                        <a className="navbar-brand" href="/">  Inventory</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Minibar
