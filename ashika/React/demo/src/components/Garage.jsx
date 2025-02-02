import React from 'react'
import Car from './Car'
import Football from './Football';
import Goal from './Goal';
const Garage = () => {
  const carInfo = {name:"ford" , model:"Mustang"};
  return (
    <>
    <h2>Who Lives in Garage</h2>
    <Car brand={carInfo} />
    <Football/>
    <Goal/>
    
    </>
  )
}

export default Garage