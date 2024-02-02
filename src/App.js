import logo from './logo.svg';
import './App.css';
import Annonces from './views/annonces/Annonces';
import DetailAnnonce from './views/annonces/DetailAnnonce';
import Home from './views/home/Home';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />    
      <Route path='/Annonces' element={<Annonces />} /> 
      <Route path='/DetailAnnonce/:id_annonce' element={<DetailAnnonce />} /> 
    </Routes>
    </>
  )
}

export default App;
