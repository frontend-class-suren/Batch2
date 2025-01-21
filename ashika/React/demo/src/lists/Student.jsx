import React from 'react'

const Student = (props) => {
  return (
    <div>
      <li>RollNo:{props.RollNo}.I am a {props.Name}</li>
    </div>
  )
}

export default Student