import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" exact component={Main} />
      </Routes>
    </div>
  );
}

export default App;
