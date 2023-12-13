import logo from './logo.svg';
import './App.css';
import NavBar  from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './Components/Banner';
import { Footer } from './Components/Footer';
import { Home1 } from './Components/Home1';
import { Routes, Route } from 'react-router-dom';
import Layaut from './Components/Layout';
import { Historia } from './Components/Historia';
import { Default } from './Components/Default';
import { La_Salle } from './Components/La_Salle';
import { Ubicacion } from './Components/Ubicacion';
import { Educacion } from './Components/Educacion';
import { Login } from './Components/Login';
import { Creditos } from './Components/Creditos';
import { Bolmun } from './Components/Bolmun';
import { Convivencia } from './Components/Convivencia';
import { Ayuda } from './Components/Ayuda';
import {col_la_salle_la_paz} from './Components/col_la_salle_la_paz';
import { Colegio } from './Components/Colegio';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Colegio/>} />
        <Route path='historia' element={<Historia />} />
        <Route path='la_salle' element={<La_Salle />} />
        <Route path='ubicacion' element={<Ubicacion />} />
        <Route path='educacion' element={<Educacion />} />
        <Route path='login' element={<Login />} />
        <Route path='creditos' element={<Creditos />} />
        <Route path='bolmun' element={<Bolmun />} />
        <Route path='convivencia' element={<Convivencia />} />
        <Route path='ayuda' element={<Ayuda />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
