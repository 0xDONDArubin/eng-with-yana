import React from "react";
import MainPage from "./pages/MainPage/MainPage";
import { Routes, Route } from 'react-router-dom';
import AboutMePage from './pages/AboutMePage/AboutMePage'
import ArticlesPage from './pages/ArticlesPage/ArticlesPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/about"} element={<AboutMePage />} />
        <Route path={"/articles"} element={<ArticlesPage />} />
        <Route path={"/contacts"} element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
