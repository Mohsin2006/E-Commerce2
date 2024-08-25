import React, { useState } from 'react'
import "./CSS/LoginSignup.css"
import axios from 'axios'
const LoginSignup = () => {
  const[state, setState]=useState('login')
  const [formData, setFormData]=useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler=(e)=>{
   setFormData({...formData, [e.target.name]:e.target.value})
  }


  const signup = async () => {
    let obj = {
        formData: formData
    };
    console.log(obj,"obj");
    if (!obj.formData) { // Checking if formData is empty
        alert("Please enter data");
    } else {
        try {
            const response = await axios.post("http://localhost:4000/signup", obj.formData);
            console.log(response);
            if(response.data.success){
              localStorage.setItem("auth_token", response.data.token)
              window.location.replace("/")
            }
            else{
              alert(response.data.error)
            }
        } catch (error) {
            console.log(error);
        }
    }
};

const login=async ()=>{
let object={
 formData:formData
}
if(!object.formData){
  alert("please fill data")
}
else{
  await axios.post("http://localhost:4000/login", object.formData)
  .then((res)=>{console.log(res)
  if(res.data.success){
    alert("Login Successfull")
    localStorage.setItem("auth_token", res.data.token)
    window.location.replace("/")
  }
  else if(!res.data.success){
    alert(res.data.error)
  }
})
  .catch((res)=>console.log(res))
}
}
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
        {state==='sign Up'? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>} 
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='email address' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
          </div>
          <button onClick={()=>{state==='login'?login():signup()}}>Continue</button>
          {state==='sign Up'?<p className='loginsignup-login'>Already have an accound <span onClick={()=>{setState('login')}}>Login here</span></p>
          :<p className='loginsignup-login'>Creat an accound <span onClick={()=>{setState('sign Up')}}>Click here</span></p>}

          <div className="loginsignup-agree">
            <input type='checkbox' name='' id='' />
            <p>By continueing i agree to the terms of use and Policy</p>
            {state==='login'? <a style={{textDecoration:"none", color:"red"}} href=''>Forget Password</a>:<></>}
          </div>
      </div>
    </div>
  )
}

export default LoginSignup
