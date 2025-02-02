import React, { useState } from 'react'
import './form.css';

const MyForm = () => {
    const [name,setName] = useState("")
    const [email,resetName] = useState("")
    const [password,presetName] = useState("")

    const handelSubmit = (event)=>{
        event.preventDefault();
        alert(`The details you entered was: ${name}, ${email}, ${password}`)
    }
  return (
<>
<form onSubmit={handelSubmit}>
    <h1>CONTACT INFO</h1>
    <label htmlFor="">Name:</label> <br />
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='Enter your name' />
    <br />
    <label htmlFor="">Email:</label>
    <br />
    <input type="email" value={email} onChange={(e)=> resetName(e.target.value)} placeholder='Enter Your Email ID' />
    <br />
    <label htmlFor="">Password:</label>
    <br />
    <input type="password" value={password} onChange={(e)=> presetName(e.target.value)} placeholder='Enter Password' name="Enter your password" id="" />
    <br /> <br />
    <input type="submit" />

</form>
</>
)
}

export default MyForm