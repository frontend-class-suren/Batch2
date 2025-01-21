import React from 'react'
import Car from './Car'
import Football from './Football';
import Goal from './Goal';

const Garage = (props) => {

    const myName = {name: "Ford", model: "Mustang"};
  return (
    <>
  <h1>Who lives in my garage?</h1>
  <Car brand={myName} />
  { <Football /> }
  <Goal />
  </>
  )
}

export default Garage