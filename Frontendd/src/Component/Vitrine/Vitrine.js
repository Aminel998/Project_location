import React, { Component } from 'react'
import Menu from '../Home/Menu'
import   './css/Vitrine.css'
import Minibar from './Minibar'
import SearchBar from './SearchBar'
import ResultCar from './ResultCar'
import Footer from '../Home/Footer'

export class Vitrine extends Component {
    render() {
        return (
            <div>
                <div className="firstV">
                <Menu/>
                </div>
                <div className="header-img">
                    <h2>Inventory Grid</h2>
                </div>
                <div className="secondV">
                    <Minibar/>
                </div>
                <div className="thirdV">
                    <div className="toTool">
                        <SearchBar/>
                    </div>
                    <div className="toResult">
                        <ResultCar/>
                    </div>
                    
                </div>
                <br/> <br/><br/> <br/>

                   <div className="thelast">
                        <Footer/>
                   </div>
            </div>
        )
    }
}

export default Vitrine
