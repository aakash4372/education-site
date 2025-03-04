import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyOffcanvas from './Pages/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Pages/Home';


const Layout = ({ children }) => (
  <>
    <MyOffcanvas /> 
    {children}
  </>
);

export default function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/gallery" element={<Layout><h1>jdfsdfdk</h1></Layout>} />
        <Route path="/contact" element={<h1>jk</h1>} />
      </Routes>
    </Router>
  );
}
