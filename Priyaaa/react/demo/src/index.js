import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Submit from './project/Submit';
 import Layout from './Router/Layout'
 import Home from './Router/Home'
 import Blogs from './Router/Blogs'
 import Contact from './Router/Contact'
 import NoPage from './Router/NoPage'
 import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MyForm from './components/form/MyForm';
// import Maplist from './components/lists/Maplist';
// import Status from './components/pages/Status';
// import App from './App';

// import 'bootstrap/dist/css/bootstrap.min.css';

// const abc = <h2 className='bg-primary text_color'>Hello This is abc variable.</h2>
// function Car() {
  // return <h2>Hello React</h2>
// }

// function Car(){
//   return <h2>I have a car</h2>
// }

// function Garage(){
//   return <h2>Who lives in my garage?</h2>
// }
// function Garage(props){
//   const cars = props.cars;
//   return(
//     <>
//     <h1>Garage</h1>
//     {cars.length >0 &&
//     <h2> I have {cars.length} cars in my garage.</h2>}
//     </>
//   )
// }
//  const cars = ['Ford', 'Audi', 'BMW']

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='blogs' element={<Blogs/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='*' element={<NoPage/>} />
    </Route>
   </Routes>
   </BrowserRouter>
  // <MyForm/>
  // <Maplist/>
  // <Garage cars = {cars} />
  //  <Status isLogin ={true} />
  // <Garage />
  // <Car />
  
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
  // abc
);

