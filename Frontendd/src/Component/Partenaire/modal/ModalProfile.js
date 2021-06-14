import React  from 'react'
import './ModaleProfile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import userr from '../img/userr.svg'

function ModalProfile({profile,comments}) {
    console.log(comments);
    let card = [];

    return (
        <div className="myprofile_modale">
               <div className="myproff">
               <img src={profile?require('../img/'+profile[0].image).default:null} style={{
          borderRadius: "50%",
          width: 110,
          height: 105,
        }} alt=''  />
                  
                  <h5>{profile?profile[0].name:null}</h5>
                  <h6>Total notes : </h6>
                  <div className="towrite">
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />
                   <FontAwesomeIcon icon={faStar} />
                   </div>
                   
               </div>

               <div className="mescomments">
                   <h5>Ce que disent les gens sur ce client:</h5>
                   {comments.map((val) => {
                       return(<div className="comments_ppl">
                       <div className="photos_cmt">
                           <img src={userr} alt="" width="40px"/>
                       </div>
                       <div className="contentt">
                           <table>
                               <thead>
                               <tr>
                               <th colspan="2">Evaluation : <div className="towrite">
                  {[...Array(val.note)].map((e) => <FontAwesomeIcon key={e} icon={faStar} />)}                   
                   </div> </th>
                               </tr>
                               </thead>
                               <tbody>
                               <tr>
                               <td>{val.commentaire}</td>
                               <td> {val.dateEvaluation} </td>
                               </tr>
                               </tbody>
                           </table>
                       </div>
                   </div>)
                   })}
                   
                   
               </div>

        </div>
    )
}

export default ModalProfile

