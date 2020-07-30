import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard'
import {Footer} from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faEnvelope);

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
