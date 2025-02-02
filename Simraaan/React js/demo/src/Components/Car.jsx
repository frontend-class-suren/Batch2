import React from 'react'

const Car = (props) => {
  return (
    <div>I am a Car !:{props.brand.name} model is{props.brand.model}</div>
  )
}

export default Car