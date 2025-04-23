import { Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skill from './components/Skill';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
   <>
   <Router>
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skill/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
    </div>
   </Router>
   </>
  );
}

export default App;