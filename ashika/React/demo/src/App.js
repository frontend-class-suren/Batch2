import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos';
// import Cards from './components/Cards';

function App() {
  const [count, setCount] = useState(0);
  const [todos] = useState(["todo 1", "todo 2"]);
  const increment = () => {
    setCount((c) => c + 1);
  };

  return (
    <>
     <Todos todos={todos}/>
     <hr/>
     <div>
      Count: {count}
      <button onClick={increment}>+</button>
     </div>
    </>

  );
}

export default App;
