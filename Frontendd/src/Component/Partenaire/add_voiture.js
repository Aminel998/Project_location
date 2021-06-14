import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'


function Add_voiture() {
    const history = useHistory();

        const [marque,setMarque]= useState("");
        const [modele,setModele]= useState("");
        const [etat,setEtat]= useState("");
        const [carburant,setCarburant]= useState("");
        const [couleur,setCouleur]= useState("");
        const [airBag,setAirBag]= useState("");
        const [nbrPlace,setNbrPlace]= useState("");
        const [image,setImage]= useState("");
        let user = JSON.parse(localStorage.getItem('user-info'));

      async function addVoiture(){
           console.warn(marque,modele,etat,carburant,couleur,airBag,nbrPlace);
           const formData = new FormData();
            formData.append('marque',marque);
            formData.append('modele',modele);
            formData.append('etat',etat);
            formData.append('carburant',carburant);
            formData.append('couleur',couleur);
            formData.append('airBag',airBag);
            formData.append('nbrPlace',nbrPlace);
            formData.append('partenaire_id',user.id);
            formData.append('image',image);
            let result = await fetch("http://127.0.0.1:8000/api/insertcar",{
                method:"POST",
                body:formData
            });
            alert("data has been saved");
            console.log(result);
            history.push("/Partenaire");
        }
        
        return (
            <div className="scroller_form">
                <h1>Ajouter les informations de votre voiture</h1>
                <label htmlFor="">Marque</label><br/>
                <input type="text" className="form-control" name="marque" onChange={(e)=>setMarque(e.target.value)} placeholder="Entrez la marque"/> <br/>
                <label htmlFor="">Modele</label><br/>
                <input type="text" className="form-control" name="Modele" onChange={(e)=>setModele(e.target.value)} placeholder="Entrez le modele"/><br/>
                <label htmlFor="">Etat</label><br/>
                <select className="form-control" onChange={(e)=>setEtat(e.target.value)} >
                <option disabled defaultValue>Selected etat</option>
                <option value="Neuf">Neuf</option>
                <option value="Semi-neuf">Semi-neuf</option>
                <option value="Moyenne">Moyenne</option>
                </select><br/>

                <label htmlFor="">Carburant</label><br/>
                <select className="form-control" onChange={(e)=>setCarburant(e.target.value)} >
                <option disabled defaultValue>Selected Carburant</option>
                <option value="Electric">Electric</option>
                <option value="Diesel">Diesel</option>
                <option value="Hybride">Hybride</option>
                <option value="Essence">Essence</option>
                </select><br/>

                <label htmlFor="">Couleur</label><br/>
                <input type="text" className="form-control" name="Couleur" onChange={(e)=>setCouleur(e.target.value)} placeholder="Entrez la couleur"/><br/>
                <label htmlFor="">Airbag :</label><br/>
                <div className="form-check">
                <input className="form-check-input" type="radio" name="airBag" value="avec" onChange={(e)=>setAirBag(e.target.value)} />
                    avec
                <br/>
                <input className="form-check-input" type="radio" name="airBag" value="sans" onChange={(e)=>setAirBag(e.target.value)} checked/>
                    sans
                </div>
                <label htmlFor="" >Nombre de place</label><br/>
                <input type="number" className="form-control"  placeholder="Entrez le nombre" onChange={(e)=>setNbrPlace(e.target.value)} /><br/>
                <label htmlFor="" >Upload Image de voiture</label><br/>
                <div className="img_voiture"></div>
                  <div className=" ">
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])} />
                  </div>
                  <div className="footer-back footer_right"><input onClick={addVoiture} type="button"  value="Ajouter"  className="saveEdit1"  /></div>
            </div>
        )
}

export default Add_voiture
