import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Footer from './Components/Layout/Footer/Footer';
import ErrorPage from './Pages/ErrorPage';
import AnaSehife from "./Pages/AnaSehife";
import BirjaYenilikleri from "./Pages/BirjaYenilikleri";
import HerracTeskilatlari from "./Pages/HerracTeskilatlari";
import HerracXeberleri from "./Pages/HerracXeberleri";
import Elaqe from "./Pages/Elaqe";
import Header from './Components/Layout/Header/Header';
import { Providers } from './context';
import { HerracXeberi } from './Pages/HerracXeberi/HerracXeberi';
import { BirjaYenlik } from './Pages/BirjaYenilik/BirjaYenilik';

ReactDOM.render(
  
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route element={<App />}>
            <Route element={<Header />} />
            <Route path="/" element={<AnaSehife />} />
            <Route path="/anasehife" element={<AnaSehife />} />
            <Route path="/herracxeberleri" element={<HerracXeberleri />} />
            <Route path="/herracxeberleri/:id" element={<HerracXeberi />} />
            <Route path="/birjayenilikleri" element={<BirjaYenilikleri />} />
            <Route path="/birjayenilikleri/:id" element={<BirjaYenlik />} />
            <Route path="/herracteskilatlari" element={<HerracTeskilatlari />} />
            <Route path="/elaqe" element={<Elaqe />} />
            <Route element={<Footer />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Providers>
    </BrowserRouter>,
  document.getElementById('root')
);
