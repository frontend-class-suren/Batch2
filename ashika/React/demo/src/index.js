import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Table } from 'react-bootstrap';
import Status from './components/Status';
// import Garage from './components/Garage';
// import 'bootstrap/dist/css/bootstrap.min.css';
// function Car(){
//   return <h2>Hello React</h2>
// }
// const myElement = (
//   <table>
//     <tr>
//       <th>Name</th>
//       <th>Address</th>
//     </tr>
//     <tr>
//       <td>Ashika</td>
//       <td>Devdaha</td>
//     </tr>
//     <tr>
//       <td>Simran</td>
//       <td>Manigram</td>
//     </tr>
//   </table>
// )
// function Car(){
//   return ( <h2>I have a car</h2>)
// }
// function Garage(){
//   return (
//  <>
//   <h2>Who lives near my Garage??</h2>

// <Car/>
//  </>
//   )
 
// }
// function Garage(props){
//   const cars = props.cars
//   return (
//     <>
//     <h1>Garage</h1>
//     {cars.length > 0 &&
//     <h2>I have {cars.length} in my Garage.</h2>
//     }
//     </>
//   )
// }
const cars = ["thar","Bmw","Ford"];
// // const abc = <h2 className='text_color'>Hello this is Ashika</h2>
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Status isLogin = {false}/>
  // <Garage cars={cars}/>
  // <Car />
  // myElement
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // abc
);
