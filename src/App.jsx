import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Profile } from './pages/Profile';
import { Alert } from './components/Alert/Alert';
import { AlertState } from './context/Alert/AlertState';
import { GitHubState } from './context/GitHub/GitHubState';


function App() {
  return (
    <GitHubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="g-4 mt-5">
            <div className='container'>
              <div className="row">
                <div className="bg-dark h-100 p-lg-5 p-md-4 p-3 text-white bg-dark rounded-3">
                  <Alert text='Внимание!' />
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
      </AlertState>
    </GitHubState>
  );
}

export default App;
