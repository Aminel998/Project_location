import React, {useState , useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Menu from './Menu'
import './css/login.css';
function Login()  {
    const [email,setEmail] = useState("") ;
    const [password,setPassword] = useState("") ;
    const [Autorisation,setAutorisation] = useState(false) ;
    const history = useHistory();
   useEffect(() => {
        if(localStorage.getItem('user-info')){
            //history.push('/Partenaire')
        }
    });
    async function login () {
        console.warn(email,password)
        let item={email,password};
        let result = await fetch("http://127.0.0.1:8000/api/logina" ,{
            method : "POST",
            headers : {
                "Content-Type" :"application/json",
                "Accept" : "application/json",
                "Access-Control-Allow-Credentials" : true 
            },
            body :JSON.stringify(item)
        });
         result =  await result.json();
         <Menu coler={result}/>

         console.log(result.function);
         localStorage.setItem('user-info',JSON.stringify(result));
         (result.function == '1') ?(history.push("/Partenaire")):(history.push("/client"));
        //history.push("/Partenaire");
    }
    function Myresult_client  () {
         return(
               <form>
                    <div className="form-group">
                        <h4 className="titleee">Authentifaction</h4>
                        <label htmlFor="exampleInputEmail1 dark"> username</label>
                        <input type="email" className="form-control " onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter email"/> <br/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control "onChange={(e)=>setPassword(e.target.value)}  placeholder="Password"/>
                    </div>
                    <div className="form-group">
                    <a href="/"><p>Forget password?</p></a>
                    </div>
              </form>
         )

    }

    function Myresult_partenaire () {
        return(
              <form>
                   <div className="form-group">
                       <label htmlFor="exampleInputEmail1 dark">Nom Complet</label>
                       <input type="text" className="form-control " id="exampleInputEmail1"  placeholder="Enter email"/> 
                       <label htmlFor="exampleInputEmail1 dark">Email</label>
                       <input type="email" className="form-control " id="exampleInputEmail1"  placeholder="Enter email"/> 
                   </div>
                   <div className="form-group">
                       <label htmlFor="exampleInputPassword1">Age  </label>
                       <input type="number" className="formataa " id="exampleInputPassword1" placeholder="Password"/>
                       <label htmlFor="exampleInputPassword1">Ville </label>
                       <input type="Num" className="formataa" id="exampleInputPassword1" placeholder="Password"/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="exampleInputPassword1">Password</label>
                       <input type="password" className="form-control " id="exampleInputPassword1" placeholder="Password"/>
                   </div>
                   <div className="form-group hopla">
                   </div>
             </form>
        )

   }
   function HandleChange (e) {
       if(e.target.outerText === 'Sign up') {
          setAutorisation(true)
          
       }else {
        setAutorisation(false)
       
       }
        
   }

        return (
            <div className="mylog">
                <div className="top-log">
                    <div className="client pods" id="123" onClick={(e) => HandleChange(e)}><p>Login</p></div>
                    <div className="seperate"></div>
                    <div className="prop pods" id ="321" onClick={(e) => HandleChange(e)}><p>Sign up</p></div>
                </div>
                <div className="rest-log">
                  { Autorisation === false ?  Myresult_client() : Myresult_partenaire() }
                </div>
                <div className="bottom-log">
                <button onClick={login} type="submit" className="btn">Login the app </button>
                </div>
            </div>
        )
    
}

export default Login
