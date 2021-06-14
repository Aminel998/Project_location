import React , {useState} from 'react'
import './css/FAQ.css';

const Accordion = ({title,active,setActive}) => {
     return(
         <div className="accordion">
             <div className="accordionHeading">
                 <div className="container1">
                     <p> How can ? dorp the rental car? </p>
                     <span onClick={()=>setActive(title)} >
                         {active === title ? "X" : "|||"}
                     </span>
                     
                 </div>
             </div>
             <div className={(active === title ? "show" : "" )+ " accordionContent"}>
                 <div className="container">
                     <p>
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                         Nemo, animi soluta. Et ab molestias, atque delectus necessitatibus 
                         nisi inventore! Repellendus consequatur eaque facere incidunt! 
                         Impedit mollitia dicta officiis temporibus illo!
                    </p>
                 </div>
             </div>
         </div>
     )
}
function FAQ() {
    const [active,setActive] = useState("")

  return(
    <div >
    <div className="triangle">

    </div>
    <div className="myfaq">
        <div className="faq-title">
            <span>See What People Ask to Us</span>
            <h5>FAQS</h5>
        </div>
        <Accordion title="Title1" active={active} setActive={setActive} />
        <Accordion title="Title2" active={active} setActive={setActive}/>
        <Accordion title="Title3" active={active} setActive={setActive}/>
        <Accordion title="Title4" active={active} setActive={setActive}/>
        </div>
    </div>  
  );
}

export default FAQ
