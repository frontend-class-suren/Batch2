import React, { useState } from 'react'
import './MyForm.css'
const MyForm = () => {
  const [name, setName]= useState("");
  const handleSubmit = (event)=>{
    event.preventDefault();
    alert(`The name you entered was :${name}`)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label className='label-1'>Enter your Name:</label><br/>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter your name'/>
      <br/>
      <input type="submit" />
      {/* <br/>
      <br/>
      <label>Enter your Email Id:</label>
      <input type="email" placeholder='Enter your email'/>
      <br/>
      <br/>
      <label>Enter your password:</label>
      <input type='password' placeholder='Enter your password'/> */}
    </form>
    </>
  )
}

export default MyForm