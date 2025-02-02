import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import Blogs from './Pages/Blogs'
import NoPage from './Pages/NoPage'
// import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'



// import Status from './Status';
// import MapList from './List/MapList';
// import MyForm from './Form/MyForm';

// const abc = <h2 className='bg-secondary'>Hello Ashika</h2>
// const abc = <h2>HELLO !</h2>
// function Garage(props){
//   const cars = props.cars
//   return(
//     <>
//     <h1>Garage</h1>
//     {cars.length > 0 &&
//     <h2>I have car {cars.length} in my Garage.</h2>
//     }
//     </>
//   )
// }
// // const cars = ['Frod', 'BMW', 'Thar'];
// const cars =["BMW"]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  





  // <MyForm/>

  // <MapList/>
  // <Status isLogin = {true}/>
  // <Garage cars ={cars}/>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // abcnp
);
