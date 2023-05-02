import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { PolybaseProvider, AuthProvider } from '@polybase/react';
import { Polybase } from '@polybase/client';
import { Auth } from '@polybase/auth';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Logo from './Pages/Logo';
import LandingPage from './Pages/LandingPage';
import Input from './Pages/Input';
import BAuth from './Biconomy/Auth';
const polybase = new Polybase();
const auth = new Auth();
function App() {
  return (
    <PolybaseProvider polybase={polybase}>
      <AuthProvider
        auth={auth}
        polybase={polybase}>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<LandingPage pageContents={Logo} />}
            />
            <Route
              path="/Input"
              element={<LandingPage pageContents={Input} />}
            />
            <Route
              path="/Biconomy"
              element={<LandingPage pageContents={BAuth} />}
            />
          </Routes>
        </Router>
      </AuthProvider>
    </PolybaseProvider>
  );
}

export default App;
