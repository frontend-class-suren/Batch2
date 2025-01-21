import React from 'react'

const Goal = () => {
    const shoot = (a) => {
        alert(a);
    }  
  return (
    <div>
        <button onClick={() =>shoot("Great Goal!")}>Take the shot!</button>
    </div>
  )
}

export default Goal