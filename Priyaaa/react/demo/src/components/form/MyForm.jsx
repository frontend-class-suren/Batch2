import React, { useState } from 'react'
import './Myform.css';

const MyForm = () => {
    const [name, setName] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
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
        <input type="text" placeholder='Enter your address' />
        <br /><br />
        <label>Enter your email:</label>
        <br /><br />
        <input type="email" placeholder='Enter your email'/>
        <br /><br />
        <label>Enter your phone no:</label>
        <br /><br />
        <input type="number" placeholder='Enter your number'/>
        <br /><br />
        <input type="submit" />
        </form>
    </>
  )
}

export default MyForm