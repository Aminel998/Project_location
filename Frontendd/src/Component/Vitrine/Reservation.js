import React, { useState,useEffect} from 'react'
import Menu from '../Home/Menu'
import  './css/Reservation.css'
import Minibar from './Minibar'
import tickk from './img/tickk.svg'
import Swal from 'sweetalert2'
import Axios from 'axios' 


function Reservation() {
    
     let user = JSON.parse(localStorage.getItem('user-info'));
        var mylink = window.location.href.split("s/");
        var id_car = mylink[1]

        const [DateDebut , setDateDebut] = useState("2020-01-01");
        const [DateFin , setDateFin] = useState("2020-01-02");
        const [NbrJour , setNbrJour] = useState("0");

        const handleDateDebutChange = ev => {
            setDateDebut((ev.target.value).split("T")[0]);
            setNbrJour(calculedate(DateDebut,DateFin));
            console.log("DateDebut : "+DateDebut)
        }
        const handleDateFinChange = ev => {
            setDateFin((ev.target.value).split("T")[0]);
            setNbrJour(calculedate(DateDebut,DateFin));
            console.log("DATEFIN : "+DateFin)
        }

        function calculedate(datee1, datee2) {
            // alert("DateDebut " + DateDebut); 
            
            var date1 = new Date(datee1); 
            var date2 = new Date(datee2); 
            var Diff_temps = date2.getTime() - date1.getTime(); 
            var Diff_jours = Diff_temps / (1000 * 3600 * 24); 
            // alert("Le nombre de jours entre les deux dates est de " + Math.round(Diff_jours) + " jours"); 
            return (Math.round(Diff_jours))
          }
          //console.log("nombre de jour "+NbrJour);
        const [dateDebb,setDebb]=useState("");
        const [dateFinn,setFinn]=useState("");
        const [DataAnnonce , setDataAnnonce] = useState([]);
        useEffect(()=>{
            
            Axios.get('http://127.0.0.1:8000/api/getAnnonce/'+id_car).then((reponse)=> {
                setDataAnnonce(reponse.data[0]) ;
                setDebb(reponse.data[0].dateDebut);
                setFinn(reponse.data[0].dateFin);

            })
        },[]) 
        console.log("data fin "+dateFinn)

        function swal(){
            Swal.fire({
                title: 'Are you sure',
                text: "You want to make a reservation of this car?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Resever it now!'
              }).then(function(result){
                
                if (result.isConfirmed) {
                
                  Swal.fire(
                    'Done!',
     
                    'Your Réservation has been sent.',
                    'success'
                  ).then(function(){
                    sendReservation();
                });
                }
              })
        }
        
        function sendReservation(){
            var mydatedebu = dateDebb.split('T');
            var mydatefin = dateFinn.split('T');
            let DateDebutSql=mydatedebu[0]+' '+mydatedebu[1];
            let DateFinSql=mydatefin[0]+' '+mydatefin[1];
            Axios.get('http://127.0.0.1:8000/api/store', {
              params: {
                ida : DataAnnonce.id,
                dateDebutRes:DateDebutSql,
                dateFinRes: DateFinSql,
                idclient : user.id
              }
            })
            .then(function (response) {
                console.log("coucouu");
                console.log(response.data)
                //alert(response.data)
                //console.log(myData);
            })
        
    }
        return (
            <div className="maRes">
                <div className="firstV">
                <Menu/>
                </div>
                <div className="header-img headImg">
                    <h2>Réservation</h2>
                </div>
                <div className="secondV">
                    <Minibar/>
                </div>
                <div className="content_res">
                    <div className="my_img">
                        <div className="titile">
                        {DataAnnonce.marque}{' '}{DataAnnonce.modele}
                        </div>
                        <div className="img_content">
                            <img src={require('../Partenaire/img/'+id_car+'.jpg').default} alt="" height="251px" width="100%" />
                            <span className="item_price">{DataAnnonce.prix}Dh/Day</span>
                        </div>
                        <div className="bottom_img">
                        <ul className="clearfix">
                            <span>{DataAnnonce.couleur}</span>
                            <span>{DataAnnonce.carburant}</span>
                            <span>{DataAnnonce.ville}</span>
                            <span>{DataAnnonce.etat}</span>
                            </ul>
                        </div>
                    </div>
                    <div className="my_Description">
                        <div className="pickUpdate">
                            <div className="firstpick">
                                <label htmlFor="" className="lato">From Date and Hour</label> <br/>
                                <input className="form-control tocontrol" type="datetime-local" defaultValue={dateDebb} onClick={handleDateDebutChange} onChange={(e)=>{setDebb(e.target.value);handleDateDebutChange(e)}}  min={DataAnnonce.dateDebut == null ? "2011-02-20T20:20" : DataAnnonce.dateDebut.split(" ")[0]+"T"+DataAnnonce.dateDebut.split(" ")[1]} max={DataAnnonce.dateDebut== null ? "2011-02-20T20:20" :DataAnnonce.dateFin.split(" ")[0]+"T"+DataAnnonce.dateFin.split(" ")[1]} /> <br/>
                                <label htmlFor="" className="lato latos">To Date and Hour</label><br/>
                                <input className="form-control tocontrol" type="datetime-local" defaultValue={dateFinn} onClick={handleDateFinChange} onChange={(e)=>{setFinn(e.target.value);handleDateFinChange(e)}} min={DataAnnonce.dateDebut == null ? "2011-02-20T20:20" : DataAnnonce.dateDebut.split(" ")[0]+"T"+DataAnnonce.dateDebut.split(" ")[1]} max={DataAnnonce.dateDebut== null ? "2011-02-20T20:20" :DataAnnonce.dateFin.split(" ")[0]+"T"+DataAnnonce.dateFin.split("T")[1]} /><br/>
                            </div>
                            <div className="secondpick">
                                 <label htmlFor="" className="lato ">Nombre de jour :</label> <br/>
                                 <input className="form-control tocontrol" type="number"  value={NbrJour.toString()} /><br/>
                            </div>
                        </div>
                        <hr className="tosepare"/>
                        <div className="descrip_voit">
                           <h6>Description de l'annonce</h6>
                            <p>
                                {DataAnnonce.description}
                            </p>
                        </div>
                        <hr className="tosepare"/>
                        <div className="options_voiture">
                        <h6>Caracterisitiques:</h6>
                            <div className="global">
                                <div className="partic">
                                    <li><img src={tickk} alt=""  width="20px" />Statut : {DataAnnonce.statut?"Reservé" :"Disponible" }</li><br/>
                                    <li> <img src={tickk} alt=""  width="20px" />Ville : {DataAnnonce.ville}</li> <br/>
                                    <li><img src={tickk} alt=""  width="20px" />Debut location : {DataAnnonce.dateDebut}</li>
                                </div>
                                <div className="particc">
                                    <li><img src={tickk} alt=""  width="20px" />{DataAnnonce.airBag} Airbag</li> <br/>
                                    <li><img src={tickk} alt=""  width="20px" />Nombre de place : {DataAnnonce.nbrPlace}</li><br/>
                                    <li><img src={tickk} alt=""  width="20px" />Fin location :{DataAnnonce.dateFin}</li>
                                </div>
                            </div>
                        </div>
                        <hr className="tosepare"/>
                        <button className="special_bttn" onClick={()=>{swal()}}  >Reservation Now </button>
                    </div>
                </div>
            </div>
        )

}

export default Reservation
