import React from 'react'
import Car from './Car'
import Football from './Football'
import Goal from './Goal'
const Garage = () => {
    const carInfo = {name:"BMW" , model:"2025"}
  return (
    <>
    <h2>Who lives in Garage ? </h2>
    <Car brand={carInfo} />
    <Football/>
    <Goal/>
    </>
    )
}

export default Garage