import './App.css';
import React from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Feed from './component/Feed';
import MovieDetail from './component/MovieDetails';
import MovieTicket from './component/MovieTicket';
import Navbar from './component/Navbar';



function App() {
  return (
    <BrowserRouter>
  <Navbar/>
      <Routes>
        <Route exact path='/' element={<Feed/>} />
        <Route path='/MovieDetails/:id' element={<MovieDetail />} />
        <Route path="/MovieTicket/:name" element={<MovieTicket />} />
    
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
