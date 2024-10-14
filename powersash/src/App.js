// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListPage from './pages/ProductListPage';
import './index.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route path="/products" element={<ProductListPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;