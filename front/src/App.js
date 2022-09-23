import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ContextProvider } from './Context/Context';
import Home from './Primary/Home';

function App() {
  return (
    <div>
      <ContextProvider>
        <Routes>
          <Route path='/*' element={<Home url={""}/>}/>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
