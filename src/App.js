import logo from './logo.svg';
import './App.css';
import Annonces from './views/annonces/Annonces';
import DetailAnnonce from './views/annonces/DetailAnnonce';
import Home from './views/home/Home';
import { Route, Routes } from 'react-router-dom';
import MesAnnonces from './views/annonces/MesAnnonces';
import Favoris from './views/annonces/Favoris';
import Message from './views/message/Message';
import Login from './views/auth/Login';



function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />    
      <Route path='/Annonces' element={<Annonces />} /> 
      <Route path='/DetailAnnonce/:id_annonce' element={<DetailAnnonce />} /> 
      <Route path='/MesAnnonces' element={<MesAnnonces />} /> 
      <Route path='/Favoris' element={<Favoris />} /> 
      <Route path='/Messages/:idUtilisateur' element={<Message />} /> 
      <Route path='/Login' element={<Login />} /> 
    </Routes>
    </>
  )
}

export default App;
