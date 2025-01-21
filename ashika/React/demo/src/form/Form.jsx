import React, { useState } from 'react'
import './Form.css';
const Form = () => {
  const [name, setName] = useState("")
  const [address,setAddress] = useState("")
  const [Contact,setContact] = useState("")
  const [Email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = (event) =>{
    event.preventDefault();
    alert(`The name you entered was:${name} ,${address},${Contact},${Email},${password}`)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>Enter your Name:</label><br/>
<input type='text'value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter your Name!!'/><br/>
<label>Enter your Address:</label><br/>
<input type='address' value={address} onChange={(e)=> setAddress(e.target.value)} placeholder='Enter your address!!'/><br/>
<label>Enter your Contact no. :</label><br/>
<input type='number'value={Contact} onChange={(e)=> setContact(e.target.value)} placeholder='Enter your phone no.!!'/><br/>
<label>Enter your EmailId :</label><br/>
<input type='email' value={Email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email!!'/><br/>
<label>Enter your password:</label><br/>
<input type='password' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter password!!'/><br/>
<input type="submit" />

    </form>
    </>
  )
}

export default Form