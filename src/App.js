/** @format */

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
import { WagmiConfig, createClient } from 'wagmi';
import { getDefaultClient, ConnectKitProvider } from 'connectkit';
import NFTCard from './Components/NFTCard';

const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: 'Huddle01-Token-Gating',
  })
);
const polybase = new Polybase();
const auth = new Auth();
function App() {
  return (
    // <WagmiConfig client={client}>
    //   <ConnectKitProvider>
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
              path="/NFTCard"
              element={<LandingPage pageContents={NFTCard} />}
            />
          </Routes>
        </Router>
      </AuthProvider>
    </PolybaseProvider>
    //   </ConnectKitProvider>
    // </WagmiConfig>
  );
}

export default App;
