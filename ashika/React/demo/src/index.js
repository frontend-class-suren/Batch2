import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './index.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import NoPage from './pages/NoPage';
// import App from './App';
// import { Form, Table } from 'react-bootstrap';
// import Status from './components/Status';
// import Map_list from './lists/MapList';
// import MapList from './lists/MapList';
// import MyForm from './form/MyForm';
// import Form from './form/Form';
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
// const cars = ["thar","Bmw","Ford"];
// // const abc = <h2 className='text_color'>Hello this is Ashika</h2>
 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App/>

<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout />}>
     <Route index element = {<Home/>}/>
     <Route path='/contact' element={<Contact/>}/>
     <Route path='/blogs' element={<Blogs/>}/>
     <Route path='*' element={<NoPage/>}/>
     </Route>
</Routes>
</BrowserRouter>

);
