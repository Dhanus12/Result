
import './App.css'
import axios from 'axios'
import './secret.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Secret() {
  const [msg,setmsg]= useState('');
    const [password,setpassword]=useState('');
    const Navigate=useNavigate();
    const[Secret,SetSecret]=useState('');
    const[hint,sethint]=useState('');
    const[Secretdecryptmsg,Setsecretdecryptmsg]=useState('');
    const[Passwordfordecrypt,Setpasswordfordecrypt]=useState('');
    const[Eform,Seteform]=useState(true)
    const[Dform,Setdform]=useState(false)
    const[Decryptmsg,Setdecryptmsg]=useState('')
  
    const encryptmessage=()=>{
      axios.post(`https://locktalk-api.up.railway.app/encryptmsg?msg=${msg}&password=${password}`)

     
    
    .then((response)=>{
      const secretmsg=response.data;
       SetSecret(secretmsg);
       Navigate("/Success",{state:{hint_msg:hint,
        secret_msg:secretmsg
       }})

    })
  }
  const decryptmsg=()=>{
       axios.post(`https://locktalk-api.up.railway.app/decryptmsg?secret=${Secretdecryptmsg}&password=${Passwordfordecrypt}`)

     
    
    .then((response)=>{
      const secretmsg=response.data;
       Setdecryptmsg(secretmsg);
      

    })
  }
  return (
   <>
   <div className='container'>
<h1>locktalk</h1>
<div style={{display:"flex",columnGap:"20px"}}>
<button className={Eform?'active':'disable'} onClick={()=>{Seteform(true)
  Setdform(false)
}}>Encrypt</button>
<button className={Dform?'active':'disable'}  onClick={()=>{
  Setdform(true)
  Seteform(false)
}} >Decrypt</button>
</div>
{Eform && <div id='form'>
    <label>Message </label>
        <textarea 
        id='msg-box'
        required
        type="text"
        value={msg}
        onChange={(event)=>{setmsg(event.target.value)}} 
        placeholder='enter your message'/>
        <label htmlFor="">password</label>
        <input type='password' 
        required
        value={password}
        onChange={(event)=>{setpassword(event.target.value)}}
        placeholder='Enter Your Password'/>
        <label>Hint For a Password</label>
        <input type="text"
        value={hint} 
        onChange={(event)=>{sethint(event.target.value)}}/>
        <button  onClick={encryptmessage}>Encrypt Message</button>
   
</div>}

{Dform&&( <div id='decrypt-form'>
<label >secret message</label>
<input
placeholder='paste the seecret msg'
value={Secretdecryptmsg}
onChange={(event)=>Setsecretdecryptmsg(event.target.value)}
/>
<label >password</label>
<input 
placeholder='enter the secret msg password'
value={Passwordfordecrypt}
onChange={(event)=>Setpasswordfordecrypt(event.target.value)}
/>
<button onClick={decryptmsg}>Decrypt message</button>
<input readOnly value={Decryptmsg}/>
</div>)}

   </div>
   </>
  )
}

export default Secret;