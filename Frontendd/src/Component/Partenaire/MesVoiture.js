import React , {useState,useEffect}from 'react'
import  './css/MesVoiture.css'
import { Link } from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import airbag from './img/airbag.svg'
import code from './img/code.svg'
import color from './img/color.svg'
import fuel from './img/fuel.svg'
import tick from './img/tick.svg'
import axios from 'axios';


function MesVoiture(props){

    let user = JSON.parse(localStorage.getItem('user-info'));

        const [disable, setDisable]= useState(true);
        const [hidden, setHidden]= useState(false);

        const [marque,setMarque]= useState("");
        const [modele,setModele]= useState("");
        const [etat,setEtat]= useState("");
        const [carburant,setCarburant]= useState("");
        const [couleur,setCouleur]= useState("");
        const [airBag,setAirBag]= useState("");
        const [nbrPlace,setNbrPlace]= useState("");
        
        const [myData,setData]= useState([])
        useEffect(() => {
            axios.get('http://127.0.0.1:8000/api/mesvoitures', {
              params: {
                id: user.id
              }
            })
            .then(function (response) {
                setData(response.data);
                //console.log(myData);
            })
          },[]);
          
          

        function changeStatu () {
            setDisable(!disable);
            setHidden(!hidden);
        }

        async function saveChanges($id_car,$id_part) {              

               const formData = new FormData();
               console.warn($id_part,marque,modele,etat,carburant,couleur,airBag);

                formData.append('partenaire_id',$id_part);
                formData.append('id',$id_car);
                formData.append('marque',marque);
                formData.append('modele',modele);
                formData.append('etat',etat);
                formData.append('carburant',carburant);
                formData.append('couleur',couleur);
                formData.append('airBag',airBag);
                formData.append('nbrPlace',nbrPlace);
                let result = await fetch("http://127.0.0.1:8000/api/updateCarr",{
                    method:"POST",
                    body:formData
                });
                result = await result.json()
                console.log(result)
                setMarque(result[0].marque)
                setModele(result[0].modele)
                setEtat(result[0].etat)
                setCarburant(result[0].carburant)
                setCouleur(result[0].couleur)
                setAirBag(result[0].airBag)
                setNbrPlace(result[0].nbrPlace)
                setDisable(!disable);
                setHidden(!hidden);
                alert("data has been updated");
                //history.push("/Partenaire");
           }

    const history = useHistory();


        async function deleteVoiture(idcar){
            const formData = new FormData();
             formData.append('id',idcar);
             console.log(idcar);
             console.log(user.id);
             formData.append('partenaire_id',user.id);
             await fetch("http://127.0.0.1:8000/api/deleteCarr",{
                 method:"POST",
                 body:formData
             });
             alert("data has been deleted");
             history.push("/Partenaire");
         }

        return (
            <div className="MesVoitures">
                <div className="footer-back">
                <Link to="/Addvoiture">
                   <input type="button"  value="Ajouter Voiture"  className="saveEdit1"  />
                </Link>
                </div>
                {myData.map((attribut,index)=>{
                return(
                <div className='cardAnnonce' key={index}>
                        <div className="toflex">
                            <div className="img-annonce">
                                <img alt="" src={require('./img/'+attribut.image).default} width="300px" height="300px"/>
                            </div>
                            <div className="content-annonce">
                                <div className="title_rate">
                                    <h2><input type="text" className="modeell mrkk" onClick={(e)=>setMarque(e.target.value)} defaultValue={attribut.marque} onChange={(e)=>setMarque(e.target.value)} disabled = {disable? "disabled" : ""}/></h2>
                                </div>
                                <div className="description">
                                    <li><img src={tick} alt="" width="11px"/><span>Modele :<input type="text" className="modeell" onClick={(e)=>setModele(e.target.value)} defaultValue={attribut.modele} onChange={(e)=>setModele(e.target.value)} disabled = {disable? "disabled" : ""}/> </span>  </li>
                                    <li><img src={tick} alt="" width="11px"/><span>État :<input type="text" className="modeell etatt" onClick={(e)=>setEtat(e.target.value)} defaultValue={attribut.etat} onChange={(e)=>setEtat(e.target.value)} disabled = {disable? "disabled" : ""}/></span></li>
                                    <li><img src={tick} alt="" width="11px"/><span>Nombre de place :<input type="text" className="modeell nbrpll" onClick={(e)=>setNbrPlace(e.target.value)} defaultValue={attribut.nbrPlace} onChange={(e)=>setNbrPlace(e.target.value)} disabled = {disable? "disabled" : ""}/> </span></li>
                                </div>
                                <div className="times tocaracter">
                                    <ul>
                                        <li id="dateretrait"> <img src={color} alt="" width="20px" /> <span><input type="text" className="modeell coul" onClick={(e)=>setCouleur(e.target.value)} defaultValue={attribut.couleur} onChange={(e)=>setCouleur(e.target.value)} disabled = {disable? "disabled" : ""}/></span></li>
                                        <li> <img src={fuel} alt="" width="20px" /> <span><input type="text" className="modeell coul" onClick={(e)=>setCarburant(e.target.value)} defaultValue={attribut.carburant} onChange={(e)=>setCarburant(e.target.value)} disabled = {disable? "disabled" : ""}/></span></li>
                                        <li>  <img src={code} alt="" width="20px" /> <span> A{attribut.matricule}</span></li>
                                        <li> <img src={airbag} alt="" width="20px" /> <span><input type="text" className="modeell airbb" onClick={(e)=>setAirBag(e.target.value)} defaultValue={attribut.airBag} onChange={(e)=>setAirBag(e.target.value)} disabled = {disable? "disabled" : ""}/> airbag</span></li>
                                    </ul>
                                </div>
                                <hr/>
                                <div className="control">

                                   <button className="perso_btn" onClick={function(){deleteVoiture(attribut.id)}} hidden = {hidden? "hidden" : ""}>Supprimer</button>
                                   <button className="perso_btn" onClick={()=>changeStatu()} hidden = {hidden? "hidden" : ""} >Modifier</button>
                                   <button className="perso_btn" onClick={()=>saveChanges(attribut.id,attribut.partenaire_id)} hidden = {!hidden? "hidden" : ""}>Valider</button>

                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        )
}

export default MesVoiture
