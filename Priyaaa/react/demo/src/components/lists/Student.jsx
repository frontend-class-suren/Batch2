import React from 'react'

const Student = (props) => {
  return (
    <div>
        <li>Rollno: {props.Rollno} I am a {props.Name} and id: {props.key}</li>
    </div>
  )
}

export default Student