import React, { Component } from 'react'
import   './css/Searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons' ;
export class SearchBar extends Component {
    render() {
        return (
            <div className="toolbar">
                <div className="tool-title">
                    <div className="tool-left">
                        <FontAwesomeIcon icon={faGithub} />
                    </div>
                    <div className="tool-right">
                        <span>Search Filter</span>
                    </div>
                </div>
                <div className="check-box">
                    <select name="" id="">
                        <option value="Select Brand" >Select Brand</option>
                    </select> <br/><br/>
                    <select name="" id="">
                        <option value="Select Model" >Select Model</option>
                    </select><br/><br/>
                    <select name="" id="">
                        <option value="Vehicle Type" >Vehicle Type</option>
                    </select><br/><br/>
                    <select name="" id="">
                        <option value="Select Brand" >Select Brand</option>
                    </select><br/><br/>
                    <div className="from-to">
                    <select name="" id="from">
                        <option value="" >From</option>
                    </select>
                    <div className="sep"></div>
                    <select name="" id="to">
                        <option value="" >To</option>
                    </select>
                    </div><br/><br/>
                    <select name="" id="">
                        <option value="Select Brand" >Transmision</option>
                    </select><br/><br/>
                    <select name="" id="">
                        <option value="Select Brand" >Fuel Type</option>
                    </select><br/><br/>
                    <label htmlFor="">Filter By Price :</label>
                    <div className="first-price price">
                        <label htmlFor="">From</label>
                        <input type="text" placeholder="100Dh"/>
                    </div><br/>
                    <div className="second-price price">
                        <label htmlFor="" id="toto">To</label>
                        <input type="text" placeholder="500Dh"/>
                    </div><br/>
                    <div className="submit-filter">
                        <input type="submit" value="APPLY FILTERS"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar
