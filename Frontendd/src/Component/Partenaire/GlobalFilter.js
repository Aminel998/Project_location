import React from 'react'
import './css/GlobalFilter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
const GlobalFilter = ({filter,setFilter}) => {
    
    return (
            
            <div className="input-group" >
            <div className="form-outline">
            <label className="form-label" htmlFor="form1">Search</label>{'   '}
                <input type="text" value={filter || ''} onChange={(e)=> setFilter(e.target.value)} className="form-control" />
            </div>
            <div className="searchIcon">
            <FontAwesomeIcon icon={faSearch}  />
            </div>
            </div>

    )
    
}

export default GlobalFilter
