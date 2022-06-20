import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="g-4 mt-5">
        <div className='container'>
          <div className="row">
            <div className="bg-dark h-100 p-lg-5 p-md-4 p-3 text-white bg-dark rounded-3">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile:name" element={<Profile />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
