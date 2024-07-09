import React, { useState } from 'react'
import { useEffect } from 'react'
import jwt_decode from "jwt-decode"
// import Home from './home'
// import Adminhome from './admin/adminhome'
// import './style/login.css'
import { Link, useNavigate } from 'react-router-dom'
import '../Component/google.css'


const Google = () => {

        const history = useNavigate();

        

const [ user, setUser ] = useState({});


    
    function handleCallbackResponse(response){
   console.log("Encoded jwr ID token:" +response.credential)
  var userObject = jwt_decode(response.credential);
  console.log(userObject);
  setUser(userObject);

  localStorage.setItem('key',user.name);
  document.getElementById("signInDiv").hidden = true;
    }

//     function handleSignOut(event) {
//         setUser({});
//         document.getElementById("signInDiv").hidden = false;
//         localStorage.removeItem('key');
//     }


   useEffect(() => {
    /*global google*/
   google.accounts.id.initialize({
    client_id: "814588111948-7khdlciu96m3lhsqqlfk6g0rjg2voara.apps.googleusercontent.com",
    callback: handleCallbackResponse
   });

   google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    { theme: "outline", size: "large"}
   );

   google.accounts.id.prompt();
   },
   []
   );
 
console.log('user'+user.email)
localStorage.setItem('isadmin',user.email)

const admin = localStorage.getItem('isadmin')

  return admin==='khemraj8151@gmail.com' ? (
    <div>
        <div>
        <div id="signInDiv">
        </div>
        </div>
        {  Object.keys(user).length !== 0 &&
        <div>
        {/* <button onClick={(e) => handleSignOut(e)}>Sign out</button> */}
       
</div>
        }
       
     
{
    user &&
    <div className='imgmain'> 
    <h1>Welcome </h1>
    <h2>Admin Profile Page</h2>
    {/* <img className='img555' src={user.picture} alt="Jane"></img> */}
<h4 className='nnn'><span className='span'>Name:</span>  <span className='span'>{user.name}</span></h4>
<h4><span className='span'>Email Id:</span>  <span className='span'>{user.email}</span></h4>
</div>
}
{

        Object.keys(user).length > 0 &&
        <div className='GTO'>
        {/* <Adminhome></Adminhome> */}
        {/* <Link to="/adminhome"> */}
               <button className='gto' onClick={() => history(`/adminhomepage`)} >Go to home page</button>
               {/* </Link>  */}
        </div>
}

{/* {  Object.keys(user).length !== 0 &&
        <div>

</div>
        } */}

        </div>
  ):(
        <div>
                   <div id="signInDiv">

</div>


        <div>


        {
   Object.keys(user).length > 0 &&
    <div className='imgmain'> 
                 <h1>Welcome </h1>
                 <h2>Profile Page</h2>
                 {/* <img className='img555' src={user.picture} alt="Jane"></img> */}
        <h4 className='nnn'><span className='span'>name:</span>  <span className='span'>{user.name}</span></h4>
        <h4><span className='span'>Email Id:</span>  <span className='span'>{user.email}</span></h4>
        </div>
}

        {

                Object.keys(user).length > 0 &&
                <div className='GTO'>
                {/* <Home></Home> */}
               
               <Link to="/mainpage  ">
               <button className='gto'>Go to home page</button>
               </Link> 
                </div>
        }
        </div>
        </div>
  )
}

export default Google

























// import React from 'react'
// import { useEffect,useState} from 'react';
// import jwt_decode from "jwt-decode";
// import "./google.css";


// const Google = () => {
//   const {user, setUser} = useState({});

//     function handleCallbackResponse(response){
//         console.log("Encoded JWT ID token: " + response.credential);
//         var userObject = jwt_decode(response.credential);
//         console.log(userObject);
//         setUser(userObject);
//         document.getElementById("signInDiv").hidden= true;

// }

// function handleSignOut(event) {
//   setUser({});
//   document.getElementById("signInDiv").hidden= false;

// }
//     useEffect(()  => {
//         /* global google */
//         google.accounts.id.initialize({
//             client_id: "814588111948-7khdlciu96m3lhsqqlfk6g0rjg2voara.apps.googleusercontent.com",
//             callback: handleCallbackResponse
//         });
       
//         google.accounts.id.renderButton(
//         document.getElementById("signInDiv"),
//         { theme: "outline", size: "large"},
//     );
// google.accounts.id.prompt();
// }, []); 

// // If we have no user: sign in button
// // If we have a user: show the log out button
//   return (
    
//     <div className="SID">
//       <div className="SI">Sign-In</div>
//     <div id="signInDiv"></div>
//     {/* {
//       Object.keys(user).length !== 0 &&
//       <button className="SO" onClick={(e) => handleSignOut(e)}>Sign Out</button>
//     }
//     */}
//     { user &&
//     <div>
//     <img src={user.picture}></img>
//     <h3>{user.name}</h3>
//     </div>
//     }
//     </div>
//     )
// }

// export default Google