import React from 'react'

const Car = (props) => {
  return (
    <div>
        <h2>Hi ! My car is  {props.brand.name} And It is a  {props.brand.model}.</h2>
    </div>
  )
}

export default Car