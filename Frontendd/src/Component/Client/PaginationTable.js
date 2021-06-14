import React , {useMemo, useState , useEffect} from 'react'
import {useTable , useGlobalFilter , usePagination} from 'react-table'
import COLUMNS from './columns'
import Modal from 'react-modal'
import ModalAnnonce from '../Partenaire/modal/ModalAnnonce'
import  './css/PaginationTable.css'
import GlobalFilter from './GlobalFilter'
import megaphone from './img/megaphone.svg'
//import cancel from './img/cancel.svg'
import cancela from './img/cancela.svg'
import Axios from 'axios' 

const PaginationTable = () => {
  let user = JSON.parse(localStorage.getItem('user-info'));
  const [dataReservation,setDataReservation] = useState([]);
  useEffect(()=>{
    Axios.get('http://127.0.0.1:8000/api/mesreservationclient', {
      params: {
        idclient: user.id
      }
    }).then((reponse)=> {
        setDataReservation(reponse.data)
    })
},[])
const [DataAnnonce,setDataAnnonce] = useState([]);

function toshowMyanno(idannoo){
  Axios.get('http://127.0.0.1:8000/api/resviaclient', {
    params: {
      ida: idannoo
    }
  }).then((reponse)=> {
      
      setDataAnnonce(reponse.data);
  })
}


console.log(dataReservation)
    const columns = useMemo(() => COLUMNS, [])
    //const data = useMemo(() => dataReservation, [])
     
    const [modalIsOpenAnnonce , setModalIsOpenAnnonce] = useState(false)
    //const [idannoo , setIdannoo] = useState("false")
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
              <th>ID Res</th>
              <th>Date Debut</th>
              <th>Date Fin</th>
              <th>ID annonce</th>
              <th>Prix Total</th>
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
              <td>{infos.statut === '1' ?"Réservé" : "En Attente"}</td>
              <td>
              <button onClick={()=>(setModalIsOpenAnnonce(true),toshowMyanno(infos.annonce_id))}><img src={megaphone} alt="" width="20px"/></button>
              </td>
            </tr>
            )
          })}
          </tbody>
        </table>
        
   {/*
        <table {...getTableProps()} className="tablepagi">
            <thead>
                {
                 headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                    <th>Action</th>
                    </tr>
                    )) 
                }
            </thead>
            <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  )
                })
                }
                                {console.log(page)}
                <td>
                  <button onClick={()=>setModalIsOpenAnnonce(true)}><img src={megaphone} alt="" width="20px"/></button>
                  <button ><img src={cancel} alt="" width="20px"/></button>
                </td>
              </tr>
            )
          })}
          </tbody>
        </table>*/}

        

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
