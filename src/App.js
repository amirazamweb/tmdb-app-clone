
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import MovieDetails from './model/MovieDetail/MovieDetails';
import { createContext, useState } from 'react';
import AppBg from './components/AppBg/AppBg';
import Checkout from './pages/Checkout/Checkout';

export let popupContext = createContext();

function App() {

  let defaultContent = { img: '', tile: "", overview: "", rating: "", lang: "" };

  let [popupContent, setPopupContent] = useState({ show: false, content: defaultContent })

  return (
    <div className='App'>
      <popupContext.Provider value={{ popupContent, setPopupContent }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search_movie/:movie' element={<Home />} />
            <Route path='/movie_type/:movieType' element={<Home />} />
            <Route path='/checkout/:id' element={<Checkout />} />
            <Route path='*' element={<h2 style={{ textAlign: 'center' }}>Page not found</h2>} />
          </Routes>
          <AppBg />
          <MovieDetails />
        </BrowserRouter>
      </popupContext.Provider>

    </div>
  );
}

export default App;
