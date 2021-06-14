import React, { useState } from "react";
import './ModaleProfile.css'
import alert from '../img/alert.svg'
import Rate from "./Rate";
import Axios from 'axios' 
import { Link , useHistory} from 'react-router-dom'


function ModalComents({profile,dateFina,iddcli,iddress,idmycar,mystatures}) {
  const history = useHistory();  
  let user = JSON.parse(localStorage.getItem('user-info'));
    const [rating, setRating] = useState(0);
    const [comment,setComment]=useState();
    var dtfin = dateFina.split(' ')[0]
    async function deleteReservatioon(idres){
      await Axios.get('http://127.0.0.1:8000/api/deleteReservation', {
        params: {
          idres: idres,
        }
      })
    }
    async function AddNewComment(from,to,cmt,idcar,idres){
        //console.warn(from,to,cmt,rating,idcar,idres)
        await Axios.get('http://127.0.0.1:8000/api/insertComment', {
          params: {
            idfrom: from,
            idto:to,
            commentaire:cmt,
            note:rating,
            idcar:idcar,
            idres:idres,
          }
        })
        deleteReservatioon(idres);
        history.push("/Partenaire");
      }
        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        var dateNow = new Date(year, month, date);  
      var dateAnnonca = new Date(dtfin.split('-')[0], dtfin.split('-')[1], dtfin.split('-')[2].split(' ')[0]);
    return (
        <div className="myprofile_modale">
               <div className="myproff">
               <img src={profile?require('../img/'+profile[0].image).default:null} style={{
          borderRadius: "50%",
          width: 110,
          height: 105,
        }} alt=''  />
                  <h5>{profile?profile[0].name:null}</h5>
                  <br/>
                  {dateAnnonca<dateNow && mystatures==1 ?<div className="tohideaucas">            
                   <center><em>Vous pouvez laisser un Commentaire et un evaluation sur ce client</em></center>
                   <div className="towrite ofrating">
                   <span>Note :</span>
                   <Rate rating={rating} onRating={(rate) => setRating(rate)} />
                  Rating {rating}
                   </div>
                   <div className="tocomment">
                   <span>Commentaire :</span> 
                   <textarea className="mytextareaa" value={comment} name="" id="" onChange={e=>{setComment(e.target.value)}} cols="26" rows="3"></textarea>
                    </div> 
                    </div> :<div className="tocmmentt">
                    <span><img src={alert} width="25px"/>{' '}Vous ne pouvez pas evaluer cet utilisateur pour le moment</span>
                    </div>}
                    
                    
                  
               </div> <br/> <br/><br/> <br/><br/> <br/><br/> 
               <div className="toleftate"><div className="footer-back footer_right"><button className="saveEdit1" onClick={()=>AddNewComment(user?user.id:null,profile?profile[0].id:null,comment,idmycar[0]?idmycar[0].id:null,iddress)}>Envoyer</button> </div></div>
        </div>
    )
}

export default ModalComents

