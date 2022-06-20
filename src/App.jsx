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
      <div className='container pt-4'>
        <div className="row">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile:name" element={<Profile />} />
        </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
