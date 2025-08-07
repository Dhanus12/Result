import React from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Success() {
    const location=useLocation();
    const{hint_msg,secret_msg}=location.state
  
  return (
   <>
    <div 
    style={
        {
            width:"100vw",
            height:"100vh",
            display:"flex",
            flexDirection:"column",
           
            alignItems:"center",
            justifyContent:"center"
        }
    }
    >
<div style={{border:"1px solid black",display:"flex",alignItems:"center",flexDirection:"column",
    justifyContent:"center",rowGap:"10px",padding:"12px",borderRadius:"10px"
}}>
    <h1>Your Message has Been Secured</h1>
<h2>You Can Copy & send the below given content </h2>
   
   <p>Secret msg is:{secret_msg}</p>
   <p>Password hint is:{hint_msg}</p>
   <Link to="/">Go to Home</Link></div>
    </div>
   </>
  )
}

export default Success