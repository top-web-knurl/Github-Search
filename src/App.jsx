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
import { Layout } from './components/Layout/Layout';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <GitHubState>
      <AlertState>
        <BrowserRouter>
          <div className="page-wrapper">
            <Navbar />
            <Layout>
              <Alert text='Внимание!' />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile/:name" element={<Profile />} />
              </Routes>
            </Layout>
            <Footer />
          </div>
        </BrowserRouter>
      </AlertState>
    </GitHubState>
  );
}

export default App;
