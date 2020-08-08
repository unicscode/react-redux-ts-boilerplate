import React from 'react';
import { Link } from 'react-router-dom';

import './App.scss';

const App: React.FC = () => (
  <div>
    <h1>home page</h1>
    <Link to="/about">about</Link>
  </div>
);

export default App;
