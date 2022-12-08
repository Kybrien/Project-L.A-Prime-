import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Toprated from './pages/Toprated';
import Nowplayin from './pages/Nowplaying';
import Upcomingc from './pages/Upcoming';
import Trend from './pages/Trend';
import Search from './components/Search';
import "./styles/styles/index.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trend />} />
        <Route path="/toprated" element={<Toprated />} />
        <Route path="/now_playing" element={<Nowplayin/>} />
        <Route path="/upcoming" element={<Upcomingc />} />
        <Route path="/research" element={<Search />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


