import React from 'react'

const Home = () => {
  const boxContent = {
    color: "white",
    width: "100%",
    backgroundColor: "Black",
    textAlign: "center"

  }
  return (
    <div>
      <h1 style={boxContent}>Welcome to home page</h1>
      {
      /* <h1 style={{color:"white", textAlign:"center", backgroundColor: "black"}}>Welcome to home page</h1> */}
      <p>Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi, dolorum quos quidem aperiam placeat magni accusamus illum dignissimos alias recusandae assumenda cum voluptatum voluptas possimus numquam quam aliquam cupiditate repudiandae voluptatem doloribus ipsam ex odio! Magni sit neque aperiam!
      </p>
    </div>
  )
}

export default Home