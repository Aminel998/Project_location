import React , {useState,useEffect} from 'react'
import   './css/Add_annonce.css'
import {useHistory} from 'react-router-dom'
import axios from 'axios';

function Add_annonce (props) {
    const history = useHistory();

    const [myData,setData]= useState([])
        useEffect(() => {
            axios.get('http://127.0.0.1:8000/api/mesvoitures', {
              params: {
                id: user.id
              }
            })
            .then(function (response) {
                setData(response.data);
            })
          },[]);
          
            const [dateDebut,setDateDebut]= useState("");
            const [dateFin,setDateFin]= useState("");
            const [prix,setPrix]= useState("");
            const [premium,setPremium]= useState("");
            const [ville,setVille]= useState("");
            const [description,setDescription]= useState("");
            const [car_id,setCar_id]= useState("");
            let user = JSON.parse(localStorage.getItem('user-info'));

            async function addAnnonce(){
                console.warn(DateDebutSql,DateFinSql,prix,premium,ville,description,car_id);
                const formData = new FormData();
                formData.append('dateDebut',DateDebutSql);
                formData.append('dateFin',DateFinSql);
                formData.append('prix',prix);
                formData.append('premium',premium);
                formData.append('ville',ville);
                formData.append('description',description);
                formData.append('car_id',car_id);
                formData.append('partenaire_id',user.id);
                await fetch("http://127.0.0.1:8000/api/insertannonce",{
                    method:"POST",
                    body:formData
                });
                alert("data has been saved");
                //console.log(result);
                history.push("/Partenaire");
            }
           
            var mydatedebu = dateDebut.split('T');
            var mydatefin = dateFin.split('T');
            let DateDebutSql=mydatedebu[0]+' '+mydatedebu[1];
            let DateFinSql=mydatefin[0]+' '+mydatefin[1];
        return (
            <div className="scroller_form">
                <h1>Ajouter une annonce</h1>
                <h4>Information sur l'annonce : </h4>
                
                <label htmlFor="">Date et heur debut d'annonce</label> <br/>
                <input className="form-control" onChange={(e)=>setDateDebut(e.target.value)} type="datetime-local" placeholder="dd-mm-yyyy hh:mm:ss"  /> <br/>
                <label htmlFor="">Date et heur fin d'annonce</label><br/>
                <input className="form-control" onChange={(e)=>setDateFin(e.target.value)} type="datetime-local" /><br/>
                <label htmlFor="">Description d'annonce</label><br/>
                <textarea className="form-control" onChange={(e)=>setDescription(e.target.value)} aria-label="With textarea"></textarea><br/>
                
                <label htmlFor="">Annonce :</label><br/>
                <div className="form-check">
                <input className="form-check-input" value="Non Premium" onChange={(e)=>setPremium(e.target.value)} type="radio" name="Premium" />
                    Premium
                <br/>
                <input className="form-check-input" value="Premium" onChange={(e)=>setPremium(e.target.value)} type="radio" name="Premium"   checked/>
                    Non Premium
                </div>
                <br/>
                <label htmlFor="">Ville</label><br/>
                <input type="text" name="Ville" className="form-control" onChange={(e)=>setVille(e.target.value)} placeholder="Entrez la ville"/><br/>
                <label htmlFor="">Prix</label><br/>
                <input type="number" name="Prix" className="form-control" onChange={(e)=>setPrix(e.target.value)}  placeholder="Entrez le prix"/><br/>
                <h4>Veuillez choisir une voiture à ajouter</h4>
                <select className="form-control"  onChange={(e)=>setCar_id(e.target.value)}>
                  
                <option disabled defaultValue>Selected une voiture</option>

                {myData.map((attribut,index)=>{
                return(   
                    <option key={index} value={attribut.id} defaultValue>{attribut.marque}</option>
                )
            })}
                </select><br/>
                  <div className="footer-back footer_right"><input onClick={addAnnonce} type="button"  value="Ajouter"  className="saveEdit1"  /></div>
            </div>
        )
}

export default Add_annonce
