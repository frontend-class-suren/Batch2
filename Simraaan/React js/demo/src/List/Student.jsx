import React from 'react'

const Student = (props) => {
  return (
    <div>
        <li>
            I am  {props.Name} and My roll no is: {props.Rollno}
        </li>
    </div>
  )
}

export default Student