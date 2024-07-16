import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homePage/HomePage';
import Footer from './components/footer/Footer';

function App() {
    return (
        
            <Router>
                <div className="app">
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        
    );
}

export default App;
