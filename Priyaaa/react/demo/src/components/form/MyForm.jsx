import React, { useState } from 'react'
import './Myform.css';

const MyForm = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name},${address},${email},${password}` )
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h1>Contact Info</h1>
        <label className='label-1'>Enter your name:</label>
        <br/><br />
        <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter your name'/>
        <br/><br />
        <label >Enter your address:</label>
        <br /><br />
        <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} placeholder='Enter your address' />
        <br /><br />
        <label>Enter your email:</label>
        <br /><br />
        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email'/>
        <br /><br />
        <label>Enter your password:</label>
        <br /><br />
        <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Enter your password'/>
        <br /><br />
        <input type="submit" />
        </form>
    </>
  )
}

export default MyForm