import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { Table } from 'react-bootstrap';
import Garage from './Garage';
// import App from './App';


// const abc = < h2 className='text_color'>Hello This is ABC variable</h2>

// function Car() {
//     return <h2>Hi, This is a car components</h2>;
//   }

  // Hello = () => {
  //   return 'Hello Dear';
  // }

  const mydetail = (
    <table>
      <tr>
        <th>Name</th>
        <th>Adress</th>
      </tr>
      <tr>
        <td>James</td>
        <td>USA</td>
      </tr>
    </table>
  )
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Garage />
    // <Car />  

    // hello()
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>

);

