import React , {useMemo, useState, useEffect } from 'react'
import {useTable , useGlobalFilter , usePagination} from 'react-table'
import COLUMNS from './columns'
import Modal from 'react-modal'
import ModalProfile from './modal/ModalProfile'
import ModalAnnonce from './modal/ModalAnnonce'
import ModalComments from './modal/ModalComents'
import  './css/PaginationTable.css'
import GlobalFilter from './GlobalFilter'
import megaphone from './img/megaphone.svg'
import profile from './img/profile-user.svg'
import checked from './img/checked.svg'
import cancel from './img/cancel.svg'
import cancela from './img/cancela.svg'
import chat from './img/chat.svg'
import Swal from 'sweetalert2'
import Axios from 'axios' 

const PaginationTable = () => {
  let user = JSON.parse(localStorage.getItem('user-info'));
  const [dataReservation,setDataReservation] = useState([]);
  useEffect(()=>{
     Axios.get('http://127.0.0.1:8000/api/showResPart', {
      params: {
        id_part: user.id
      }
    }).then((reponse)=> {
        setDataReservation(reponse.data)
    })
},[])
const [DataAnnonce,setDataAnnonce] = useState([]);
const [DataOfclient,setDataOfclient] = useState();
const [dateFinn,setDatefin] = useState();
const [iddcli,setiddcli] = useState();
const [iddress,setiddress] = useState();
const [mystatures,setStatutRes]=useState();
//const [messdonnes,setMesdonnes] = useState([])
function swal(idannoo,idress,idclient){
  Swal.fire({
      title: 'Are you sure !',
      text: "You want to cancel this reservation?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete it now!'
    }).then(function(result){
      
      if (result.isConfirmed) {
        Swal.fire(
          'Done!',

          'This Réservation has been canceled.',
          'success'
        ).then(function(){
          toRefuseReservation(idannoo,idress,idclient);
      });
      }
    })
}

function swal2(idress,idclient){
  Swal.fire({
      title: 'Are you sure !',
      text: "You want to approuve this reservation?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#52b78d',
      cancelButtonColor: '#52b78d',
      confirmButtonText: 'Yes, accept it now!'
    }).then(function(result){
      
      if (result.isConfirmed) {
        Swal.fire(
          'Done!',

          'Partenaire information has been sent to user.',
          'success'
        ).then(function(){
          toAcceptReservation(idress,idclient);
      });
      }
    })
}

  function toshowMyanno(idannoo){
    Axios.get('http://127.0.0.1:8000/api/resviaclient', {
      params: {
        ida: idannoo
      }
    }).then((reponse)=> {
        setDataAnnonce(reponse.data);

      })
  }
  /// so show user
/// to show comments of this user
const [showComments,setShowcomments]=useState()
 async function showCommentsof(idannoo){
    await Axios.get('http://127.0.0.1:8000/api/showEvaluation', {
      params: {
        idcli: idannoo
      }
    }).then((reponse)=> {
        setShowcomments(reponse.data);
      })
  }
  //
  function toshowuserComent(idofmyclient,datefin,idres,statuut){
    Axios.get('http://127.0.0.1:8000/api/showuseer', {
      params: {
        idus: idofmyclient
      }
    }).then((reponse)=> {
      setDataOfclient(reponse.data);
      })
      // console.log('zkd')
      // console.log(idofmyclient,datefin,idres);
      // console.log('r')
      setDatefin(datefin)
      setiddcli(idofmyclient)
      setiddress(idres)
      //console.log(statuut)
      setStatutRes(statuut)
      //setMesdonnes(idofmyclient,datefin,idres)
  }
  //console.log(messdonnes)

// to end showing user
  async function toRefuseReservation(idannoo,idress,idclient){
    Axios.get('http://127.0.0.1:8000/api/refusreservation', {
      params: {
        idann: idannoo,
        idres: idress,
        id_part:user.id,
        idcl : idclient
      }
    }).then((reponse)=> {
      setDataReservation(reponse.data[1]);
      console.log(reponse.data);
      //alert('data removed');
      })
  }

  async function toAcceptReservation(idress,idclient){
    console.warn(idress,user.id,idclient);
    Axios.get('http://127.0.0.1:8000/api/accepterReservation', {
      params: {
        idres: idress,
        id_part:user.id,
        idcl : idclient
      }
    }).then((reponse)=> {
      setDataReservation(reponse.data[1]);
      
      })
  }
    const columns = useMemo(() => COLUMNS, [])
    //const data = useMemo(() => MOCK_DATA, [])
    const [modalIsOpenPorfile , setModalIsOpenPorfile] = useState(false) 
    const [modalIsOpenAnnonce , setModalIsOpenAnnonce] = useState(false)
    const [modalIsOpenComments , setModalIsOpenComments] = useState(false)

    const {

        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        state,
        setGlobalFilter,
    } =  useTable({
        columns : columns,
        data : dataReservation ,
        initialState: { pageIndex: 0 },
    },useGlobalFilter,usePagination)
    const { globalFilter , pageIndex, pageSize } = state 
    //console.log(state);
    return (
        <>
        <div className="toflex">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <span className="topage">
          | Go to page:{' '}
          <input
            type='number'
            defaultValue={pageIndex + 1}
            onChange={e => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: '50px' }}
          />
        </span>{' '}
        <select className="topage"
          value={pageSize}
          onChange={e => setPageSize(Number(e.target.value))}>
          {[10, 25, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        </div>


        <table className="tablepagi">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date Debut</th>
              <th>Date Fin</th>
              <th>ID annonce</th>
              <th>Prix Total</th>
              <th>ID Client</th>
              <th>Statut</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {dataReservation.map((infos,index)=>{
              return(
            <tr key={index}>
              <td>{infos.id}</td>
              <td>{infos.dateDebutReservation}</td>
              <td>{infos.dateFinReservation}</td>
              <td>{infos.annonce_id}</td>
              <td>{infos.prixTotal}</td>
              <td>{infos.client_id}</td>
              <td>{infos.statut == '1' ?"Réservé" : "En Attente"}</td>
              <td>
              <button onClick={()=>(setModalIsOpenAnnonce(true),toshowMyanno(infos.annonce_id))}><img src={megaphone} alt="" width="20px"/></button>
              <button onClick={()=>(setModalIsOpenPorfile(true),toshowuserComent(infos.client_id),showCommentsof(infos.client_id))}><img src={profile} alt="" width="20px"/></button>
              <button hidden={infos.statut == '1' ?"Hidden" : ""} onClick={()=>swal2(infos.id,infos.client_id)}><img src={checked} alt="" width="18px"/></button>
              <button hidden={infos.statut == '1' ?"Hidden" : ""} onClick={()=>swal(infos.annonce_id,infos.id,infos.client_id)}><img src={cancel} alt="" width="20px"/></button>
              <button onClick={()=>(setModalIsOpenComments(true),toshowMyanno(infos.annonce_id),toshowuserComent(infos.client_id,infos.dateFinReservation,infos.id,infos.statut))}><img src={chat} alt="" width="20px"/></button>
              </td>
            </tr>
            )
          })}
          </tbody>
        </table>


        <Modal isOpen={modalIsOpenAnnonce} ariaHideApp={false} style ={
          {
            overlay : {
              backgroundColor:"rgba(205, 205, 205, 0.719)" 
            },
            content : {
              width:"1000px",
              height:"380px",
              margin:"auto"
            }
          }
        }>
        <div><button className="tocloose" onClick={()=>setModalIsOpenAnnonce(false)}><img src={cancela} alt="" width="17px"/> </button></div>
        <ModalAnnonce mesannomali={DataAnnonce} />
        </Modal>

        <Modal isOpen={modalIsOpenPorfile} ariaHideApp={false} style ={
          {
            overlay : {
              backgroundColor:"rgba(205, 205, 205, 0.719)" 
            },
            content : {
              width:"500px",
              height:"500px",
              margin:"auto"
            }
          }
        }>
        <div><button className="tocloose" onClick={()=>setModalIsOpenPorfile(false)}> <img src={cancela} alt="" width="17px"/> </button></div>
        <ModalProfile comments={showComments} profile={DataOfclient} />
        </Modal>

        <Modal isOpen={modalIsOpenComments} ariaHideApp={false} style ={
          {
            overlay : {
              backgroundColor:"rgba(205, 205, 205, 0.719)" 
            },
            content : {
              width:"500px",
              height:"500px",
              margin:"auto"
            }
          }
        }>
        <div><button className="tocloose" onClick={()=>setModalIsOpenComments(false)}> <img src={cancela} alt="" width="17px"/> </button></div>
        <ModalComments  profile={DataOfclient} dateFina={dateFinn} iddcli={iddcli} iddress={iddress} mystatures={mystatures} idmycar={DataAnnonce}/>
        </Modal>

        <div className="bottom-table">
        <button className="page-item aha" onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'«'}
        </button>{''}
        <button className="page-item " onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>{''}
        <button className="page-item " onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>{''}
        <button className="page-item iha" onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'»'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
      </div>
        </>
    )
}

export default PaginationTable
