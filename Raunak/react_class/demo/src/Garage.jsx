import React from 'react'
import Car from './Car'
import Football from './football';

const Garage = () => {
    const myName = {name : "Ford", model : "Mustang"};
  return (
    <>
    <h2>Who lives in Garage?</h2>
    <Car brand = {myName}/>
    <Football />
    </>
  )
}

export default Garage