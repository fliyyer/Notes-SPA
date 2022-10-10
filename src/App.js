import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import AddNote from './pages/AddNote';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import NotFound from './pages/NotFound';
import { getNote } from './utils/local-data'

function App() {
  return (
     <div className='app-container'>
      <header>
        <h1><Link to='/'>Aplikasi Catatan</Link></h1>
        <Navbar />
      </header>
      <body>
         <Routes>
            <Route path='/' element={<HomePage id={getNote}/>} />
            <Route path='/archive' element={<ArchivePage />} />
            <Route path='/add' element={<AddNote />} />
            <Route path='/notes/:id' element={<DetailPage id={getNote}/>} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </body>
      </div>
  );
}

export default App;
