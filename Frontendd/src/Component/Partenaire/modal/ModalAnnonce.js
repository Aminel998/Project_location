import React, {useEffect,useState} from 'react'
import mybm from '../img/bm.jpeg'
import Axios from 'axios' 

function ModalAnnonce(props) {

    
    return (
        <div className="modalannonce">
            <div className='cardAnnonce'>
                        <div className="toflex">
                            <div className="img-annonce">
                                <img alt="" src={props.mesannomali[0]== null?"vide":require('../img/'+props.mesannomali[0].image).default} width="250px" height="250px"/>
                            </div>
                            <div className="content-annonce">
                                <div className="title_rate">
                                    <div className="titile">{props.mesannomali[0]== null?"vide":props.mesannomali[0].marque}{''}</div>
                                    <div className="rate">{props.mesannomali[0]== null?"vide":props.mesannomali[0].premium}</div>
                                </div>
                                <div className="price">Prix location :  {props.mesannomali[0]== null?"vide":props.mesannomali[0].prix}Dh/Jour</div>
                                <div className="description">
                                {props.mesannomali[0]== null?"vide":props.mesannomali[0].description}                                
                                </div>
                                <div className="times">
                                    <ul>
                                        <li id="dateretrait">Date de retrait : {props.mesannomali[0]== null?"vide":props.mesannomali[0].dateDebut.split(' ')[0]}</li>
                                        <li>Heure de retrait :  {props.mesannomali[0]== null?"vide":props.mesannomali[0].dateDebut.split(' ')[1]}</li>
                                        <li>Date de retour : {props.mesannomali[0]== null?"vide":props.mesannomali[0].dateFin.split(' ')[0]}</li>
                                        <li>Heur de retour : {props.mesannomali[0]== null?"vide":props.mesannomali[0].dateFin.split(' ')[1]}</li>
                                    </ul>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default ModalAnnonce

