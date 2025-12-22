// import freecodecampLogo from "./imagenes/FreecodecampLogo.png";
// import { BotonContador } from "./components/BotonContador";
// import { Contador } from "./components/Contador";
// import "./App.css";
// import { useState } from "react";

import './App.css'
import { Home } from './pages/Home';
import { PagContador } from './pages/PagContador';
import { PagCalculadora } from './pages/PagCalculadora';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

  function App() {
    
    return (

      <div className='contenedor-principal-app'>
      <BrowserRouter>
      <nav className='navbar-principal'>
        <Link to='/' className='nav-link'> Inicio </Link>
        <Link to='/Contador' className='nav-link'> Contador </Link>
        <Link to='/Calculadora' className='nav-link'> Calculadora</Link>
      </nav>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/Contador' element={<PagContador/>}/>
        <Route path='/Calculadora' element={<PagCalculadora/>}/>
      </Routes>
    </BrowserRouter>
      </div>
    
    )
}

export default App;
