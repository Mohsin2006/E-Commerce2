import React, { useState } from 'react'
import "./NewsLetter.css"

const NewsLetter = () => {
  const[emails, setEmail]=useState("")


  async function  handleSubscription(e) {
    let objs={email:emails}
    if(!objs){
      alert("Please enter the email id")
    }
    else{
      await  fetch("http://localhost:4000/subscription", {
        method:"POST",
        headers:{
          Accept: "application/json",
       "Content-Type": "application/json",
        },
        body:''
      })
      .then((response) => response.json())
      .then((data) => setEmail(data));
    }
   
  }
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers on your Email</h1>
      <p>Subscribe to our Newsletter and stay updated</p>
      <div>
        <input type="email" name='email'  placeholder='Your Email Id' />
        <button onClick={()=>handleSubscription()}>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
