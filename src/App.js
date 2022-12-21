import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar';
import Allstudent from './Components/Students/Allstudent';
import Createstudent from './Components/Students/Createstudent';
import Editstudent from './Components/Students/Editstudent';


function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route index element={<Allstudent/>}/>
      <Route path='/CreateStudent' element={<Createstudent/>}/>
      <Route path='/Editstudent/:id' element={<Editstudent/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
