import React, { useState , useEffect } from 'react'
import   './css/ResultCar.css'
import grid from './img/grid.svg'
import gas from './img/gas.svg'
import Axios from 'axios' 
import { Link } from 'react-router-dom';

//import JsonData from "./MyJSON.json";
import ReactPaginate from 'react-paginate'
function ResultCar (){
    let user = JSON.parse(localStorage.getItem('user-info'));

        const [pageNumber, setPageNumber] = useState(0);
        const usersPerPage = 6;
        const pagesVisited = pageNumber * usersPerPage;
        const [CarsList , setCarsData] = useState([]);
        //var dateee = Date.now();
        //console.log(Math.round(dateee / years));
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        var dateNow = new Date(year, month, date);    

        const displayUsers = CarsList
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((val,index) => {
        var dateAnnonce = new Date(val.dateFin.split('-')[0], val.dateFin.split('-')[1], val.dateFin.split('-')[2].split(' ')[0]);
        if(dateAnnonce>dateNow ) {
      return (
          
          <div className="maincontainer" key={index}>
              <div className="thecard" >
                    <div className=" thefront" >
                                <div className="img-card"><img src={require('../Partenaire/img/'+val.image).default} alt="" width="262.484px" height="189.281px" /></div>
                                <div className="card-titles">
                                {val.marque} {val.modele} 
                                </div>
                                <div className="card-info">
                                    <div className="myFlex fl1">
                                        <div className="carburant"><img src={gas} alt="" width="17px"/> {val.carburant}</div>
                                        <div className="prix">{val.prix}Dh</div>
                                        {console.log(val.dateFin)}
                                    </div>
                                    <div className="myFlex fl2">
                                        <li className="couleur item">{val.couleur}</li>
                                        <li className="etat item">{val.etat}</li>
                                        <li className="ville item">{val.ville}</li>
                                        <li className="statut items">{val.statut?"reservé" :"Dispo" }</li>
                                    </div>
                                </div>
                         </div>
                        <div className=" theback" >
                                <div className="back_title">
                                    <div className="center_title">
                                        Voiture de lux <br/>
                                        Classic SUV
                                    </div>
                                </div>
                                <div className="back-info">
                                    <div className="option1 option_back">
                                        <span id="right">Cruise Control Option &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Standard</span>
                                    </div>
                                    <div className="option2 option_back">
                                        <span id="right">Transmission</span>
                                        <span>Automatic</span>
                                    </div>
                                    <div className="option3 option_back">
                                        <span id="right">Mileage </span>
                                        <span>48,000 km</span>
                                    </div>
                                    <div className="option4 option_back">
                                        <span id="right">Engine / Fuel Capacity &emsp; V8 2.5L / 8 Gal</span>
                                    </div>
                                    <div className="option5 option_back">
                                        <span id="right">Vehicle Layout &emsp;  &emsp; &emsp;5 Pass, 4-Door Hatch</span>
                                    </div>
                                </div>
                                <div className="footer-back" >{val.statut=='1'?
                                <button type="button" className="btn btn-secondary" style={{
                                    color: "grey"
                                  }} disabled>Reserved</button> :
                                <button ><Link className="pil" to={"/Reservations/"+val.car_id} style={(user == null)? { pointerEvents: 'none' , backgroundColor:'white'} :(user.function === 0 )? { pointerEvents: 'visible' }:{ pointerEvents: 'none' , backgroundColor:'white'}} >Réserver</Link> </button>
                                }</div>
                        </div>
                </div>
          </div>
             
         );
                           }
      }
    );

         function getSrc() {   
            return Axios.get('http://127.0.0.1:8000/api/showMaVitrine');
        }
        
        useEffect(()=>{
            
            getSrc().then((reponse)=> {
                setCarsData(reponse.data) ;
                console.log(reponse.data);
            })
        },[]) 
        
        const pageCount = Math.ceil(CarsList.length / usersPerPage);

        const changePage = ({ selected }) => {
          setPageNumber(selected);
        };
        return (
            <div className="Myresult-cars">
                <div className="header-search">
                   <div className="check-box" id="check-parti">
                            <select name="" id="orderBy">
                                <option value="Select Brand" >Order By</option>
                            </select>
                            <select name="" id="item">
                                <option value="Select Model" >10 Items</option>
                            </select>
                            <div className="careau">
                                <img src={grid} alt="" width="25px"/>
                            </div>
                    </div>
                    <br/> <br/>
                        <div className="showing_result">
                            <span>
                            Showing results 1 to 10 of total 145
                            </span>
                            <div className="small_line">
                            </div>
                        </div>
                </div>
                <div className="gridOfCars">
                    <div className="rowa">
                            {
                            displayUsers
                            }
                    </div>
                    <br/>
                            <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                            />
                    <br/>
                    <div className="moi">
                        
                    </div>
                </div>
            </div>
        )
    
}

export default ResultCar
