import React , { useState, useEffect }from 'react'
import  './css/MesAnnonce.css'
//import Recette from './Recette.json'
import axios from 'axios';

import { Link , useHistory} from 'react-router-dom'

function MesAnnonce(props){
    let user = JSON.parse(localStorage.getItem('user-info'));

        const history = useHistory();
        const [disable, setDisable]= useState(true);
        const [hidden, setHidden]= useState(false);


        const [dateDebut,setDateDebut]= useState("");
        const [heurDebut,setHeurDebut]= useState("");
        const [dateFin,setDateFin]= useState("");
        const [heurFin,setHeurFin]= useState("");
        const [prix,setPrix]= useState("");
        const [ville,setVille]= useState("");
        const [description,setDescription]= useState("");
       // const [password,setPassword] = useState("") ;

       const [myData,setData]= useState([])
       useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/mesannonces', {
          params: {
            id: user.id
          }
        })
        .then(function (response) {
            console.log(response.data)
            setData(response.data);
            console.log(myData);
        })
      },[]);

        function changeStatu () {
            setDisable(!disable);
            setHidden(!hidden);
        }
        

    async function saveChanges($id_part,idannoo,idcarr) {
         console.warn($id_part);
           
            var dateDeb = dateDebut+" "+heurDebut;
            var dateFi = dateFin+" "+heurFin;
            console.warn($id_part,idannoo,dateDeb,dateFi,prix,ville,description,idcarr);
            const formData = new FormData();
             formData.append('partenaire_id',$id_part);
             formData.append('id',idannoo);
             formData.append('dateDebut',dateDeb);
             formData.append('dateFin',dateFi);
             formData.append('prix',prix);
             formData.append('ville',ville);
             formData.append('description',description);
             formData.append('car_id',idcarr);
             let result = await fetch("http://127.0.0.1:8000/api/updateAnnoncee",{
                 method:"POST",
                 body:formData
             });
             result = await result.json()
            //console.log(result)
            console.log("date"+result[0].prix);
            //console.log("date"+result[0].dateDebu);

            var datedeb = result[0].dateDebut.split(" ");
            console.log("last"+datedeb);
            var datefin = result[0].dateFin.split(" ");

            console.log(datedeb[0])
            console.log(datedeb[1])
            setDateDebut(datedeb[0])
            setHeurDebut(datedeb[1])
            setDateFin(datefin[0])
            setHeurFin(datefin[1])
            setPrix(result[0].prix)
            setVille(result[0].ville)
            setDescription(result[0].description)
            setDisable(!disable);
            setHidden(!hidden);
                
            alert("data has been updated");
            //history.push("/MesAnnonces");
        }



        async function deleteAnnonce(idcar){
            const formData = new FormData();
             formData.append('id',idcar);
             console.log(idcar);
             console.log(user.id);
             formData.append('partenaire_id',user.id);
             await fetch("http://127.0.0.1:8000/api/deleteAnnoncee",{
                 method:"POST",
                 body:formData
             });
             
             alert("data has been deleted");
             //history.push("/MesAnnonces");
             history.push("/Partenaire");
             //history.push("/MesAnnonces");
         }

    return (
        
        <div className="Mesannonce">
            <div className="footer-back">
                <Link to="/Addannonce">
                   <input type="button"  value="Ajouter Annonce"  className="saveEdit1"  />
                </Link>
            </div>

            {myData.map((infos,index)=>{
                
                var tabdateDeb = infos.dateDebut.split(' ')
                var tabdatefin = infos.dateFin.split(' ')
                //infos.prix
                return(
                    <div className='cardAnnonce' key={index}>
                        <div className="toflex">
                            <div className="img-annonce">
                                <img alt="" src={require('./img/'+infos.image).default} width="300px" height="300px"/>
                            </div>
                            <div className="content-annonce">
                                <div className="title_rate">
                                    <div className="titile">{infos.marque}{' '}{infos.modele}</div>
                                    <div className="rate"> <input type="text" className="villaa" onClick={(e)=>setVille(e.target.value)} defaultValue={infos.ville} onChange={(e)=>setVille(e.target.value)} disabled = {disable? "disabled" : ""}  /></div>
                                </div>
                                <div className="price">Prix location : <input type="text" className="prixx" onClick={(e)=>setPrix(e.target.value)}  defaultValue={infos.prix} onChange={(e)=>setPrix(e.target.value)} disabled = {disable? "disabled" : ""}  /> Dh</div>
                                <div className="description">
                                <input type="text" className="descrip" onClick={(e)=>setDescription(e.target.value)} defaultValue= {infos.description} onChange={(e)=>setDescription(e.target.value)} disabled = {disable? "disabled" : ""}  /> 
                                </div>
                                <div className="times">
                                    <ul>
                                        <li id="dateretrait">Date de retrait : <input type="text" className="madatee" onClick={(e)=>setDateDebut(e.target.value)} defaultValue={tabdateDeb[0]} onChange={(e)=>setDateDebut(e.target.value)} disabled = {disable? "disabled" : ""}  />  </li>
                                        <li>Heure de retrait : <input type="text" className="madatee" onClick={(e)=>setHeurDebut(e.target.value)} defaultValue={tabdateDeb[1]} onChange={(e)=>setHeurDebut(e.target.value)} disabled = {disable? "disabled" : ""}  /> </li>
                                        <li>Date de retour : <input type="text" className="madatee" onClick={(e)=>setDateFin(e.target.value)} defaultValue={tabdatefin[0]} onChange={(e)=>setDateFin(e.target.value)} disabled = {disable? "disabled" : ""}  /></li>
                                        <li>Heur de retour : <input type="text" className="madatee" onClick={(e)=>setHeurFin(e.target.value)} defaultValue={tabdatefin[1]} onChange={(e)=>setHeurFin(e.target.value)} disabled = {disable? "disabled" : ""}  /></li>
                                    </ul>
                                </div>
                                <hr/>
                                <div className="control">
                                   <button className="perso_btn" onClick={function(){deleteAnnonce(infos.id)}}  hidden = {hidden? "hidden" : ""}>Supprimer</button>
                                   <button className="perso_btn" onClick={()=>changeStatu()} hidden = {hidden? "hidden" : ""}>Modifier</button>
                                   <button className="perso_btn" onClick={()=>saveChanges(infos.partenaire_id,infos.id,infos.car_id)} hidden = {!hidden? "hidden" : ""}>Valider</button>
                                </div>
                            </div>

                        </div>
                    </div>
               )
            })}
        </div>
        )
}

export default MesAnnonce
