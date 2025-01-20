import React from 'react'

const Goal = () => {
  const shoot = (a) => {
    alert(a);
  }
  return (
    <div>
      <button onClick={()=> shoot("Great Goal!")}>Take shoot</button>
    </div>
  )
}

export default Goal