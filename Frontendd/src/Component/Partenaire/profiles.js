import React, { useState , useEffect} from 'react'
import './css/profiles.css'
//import Userprofile from './img/user.svg'
import edits from './img/edits.svg'
import axios from 'axios';


function Profiles () {
  let user = JSON.parse(localStorage.getItem('user-info'));

  const [nom,setNom]= useState("");
  const [age,setAge]= useState("");
  const [ville,setVille]= useState("");
  const [tel,setTel]= useState("");
  const [adresse,setAdresse]= useState("");
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/infoUserr', {
      params: {
        id: user.id
      }
    })
    .then(function (response) {
      //console.log(response.data[0]);
      console.log(response.data[0])
      setNom(response.data[0].name)
      setAge(response.data[0].age)
      setVille(response.data[0].ville)
      setTel(response.data[0].tel)
      setAdresse(response.data[0].adresse)
    })
  },[]);

  

  const [userprofile , setUserprofile] = useState('https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png')
  const [disabled , setDisabled] =useState(true);
  const [disabled1 , setDisabled1] =useState(true);


  
  /*const [nom,setNom]= useState(true);
  const [nom,setNom]= useState(true);
  const [nom,setNom]= useState(true);
  const [nom,setNom]= useState(true);*/
  
  async function saveChanges($id_part) {
    console.warn($id_part);
       console.warn(nom,age,ville);
       //console.warn(dateDebut,heurDebut);
       const formData = new FormData();
        formData.append('id',$id_part);
        formData.append('name',nom);
        formData.append('age',age);
        formData.append('ville',ville);
        
        let result = await fetch("http://127.0.0.1:8000/api/updateprofitt1",{
            method:"POST",
            body:formData
        });
        result = await result.json()
        console.log(result)
        console.log(result[0].name)
        setNom(result[0].name)
        setAge(result[0].age)
        setVille(result[0].ville)
        setDisabled(!disabled);
        
   }

   async function saveChanges2($id_part) {
    console.warn($id_part);
       console.warn(tel,adresse);
       //console.warn(dateDebut,heurDebut);
       const formData = new FormData();
        formData.append('id',$id_part);
        formData.append('tel',tel);
        formData.append('adresse',adresse);
        
        let result = await fetch("http://127.0.0.1:8000/api/updateprofitt2",{
            method:"POST",
            body:formData
        });
        result = await result.json()
        setTel(result[0].tel)
        setAdresse(result[0].adresse)
        setDisabled1(!disabled1);
        
   }


 function imageHandler(e){
    const reader = new FileReader();
    reader.onload = () => {
      if(reader.readyState === 2){
        setUserprofile(reader.result) 
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }
  function handleGameClik() {
    setDisabled(!disabled);
  }
  function handleGameClik1() {
    setDisabled1(!disabled1);
  }
  

  
  
    return (
      
      <div className='myclient'>
        <div className='nom_client'>
          <span> Mes informations personnelles </span>
        </div>

        <div className='glob_client'>
          <div className='client_profile'>
            <div className='profile_cli'>
              <div className='client_img'> <img src={require('./img/'+user.image).default} style={{
          borderRadius: "50%",
          width: 150,
          height: 150,
        }} alt=''  /></div>
              <span>{nom}</span> <br />
              
              <input type="file" name="file" id="file" className="inputfile" accept="image/*" onChange={imageHandler} />
            <label htmlFor="file" className='profil_changee'>Photo de profile</label>
            </div>
            <div className="note"></div>
          </div>
                    <div className="profile_content">
                        <div className="profile_basic">
                            <h5>Basic information</h5>
                            <img className="modify_basic" src={edits} alt="" width="25px" onClick={()=>handleGameClik()} />        
                            <div className="all_basic">
                                <div className="basic_beg">
                                    <li>ID </li>
                                    <li>Nom </li>
                                    <li>Age </li>
                                    <li>Ville </li>
                                </div>
                                <div className="basic_out">
                                    <li><input type="text" defaultValue={user.id}  disabled ={true}  /></li>
                                    <li><input type="text" defaultValue={nom} onChange={(e)=>setNom(e.target.value)} disabled = {disabled? "disabled" : ""} /></li>
                                    <li><input type="text" defaultValue={age} onChange={(e)=>setAge(e.target.value)} disabled = {disabled? "disabled" : ""} /></li>
                                    <li><input type="text" defaultValue  ={ville} onChange={(e)=>setVille(e.target.value)} disabled = {disabled? "disabled" : ""} /></li>
                                    <li><div className="footer-back"><input type="button"  value="save change" onClick={()=>saveChanges(user.id)}  className="saveEdit1" hidden = {disabled? "disabled" : ""} /></div></li>
                                </div>  
                                
                            </div>
                            
                            
                        </div>
                        <div className="profile_info">
                        <h5>Contact information</h5>
                            <img className="modify_basic" src={edits} alt="" width="25px" onClick={()=>handleGameClik1()} />
                            
                            <div className="all_basic">
                                <div className="basic_beg">
                                    <li>Tel </li>
                                    <li>Adresse </li>
                                    <li>Email </li>
                                    <li>Password </li>
                                </div>
                                <div className="basic_out">
                                    <li><input type="text" className="myadresse" defaultValue={tel} onChange={(e)=>setTel(e.target.value)} disabled = {disabled1? "disabled" : ""} /></li>
                                    <li><input type="text" className="myadresse" defaultValue={adresse} onChange={(e)=>setAdresse(e.target.value)} disabled = {disabled1? "disabled" : ""} /></li>
                                    <li><input type="text" className="myadresse" defaultValue={user.email} disabled = {true} /></li>
                                    <li><input type="text" className="myadresse" defaultValue="password" disabled = {true} /></li>
                                    <div className="footer-back"><input type="button" className="saveEdit1" onClick={()=>saveChanges2(user.id)} value="Save Changes" hidden = {disabled1? "disabled" : ""} /></div>
                                </div>  
                                
                            </div>
                        </div>
                    </div>
            </div>
            
        </div>
        )
}

export default Profiles
