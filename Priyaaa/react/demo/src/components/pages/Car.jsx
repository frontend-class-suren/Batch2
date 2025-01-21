import React from 'react'

const Car = (props) => {
  return (
    <div>I have a car. my name is {props.brand.name} model is {props.brand.model}</div>
  )
}

export default Car