import React from 'react'

const Football = () => {
    const shoot = () => {
        alert("Great shot ! ");
    }
  return (
    <div><button onClick={shoot}>Take a shoot ! </button></div>
  )
}

export default Football