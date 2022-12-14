import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLinks } from './common/constants';


const App:FC = () => (
  <div className="container mx-auto min-h-screen bg-slate-200">
    <Routes>
      {AppLinks.map(({link, Component }) => (
          <Route path={link} key={link} element={<Component />}  />
      ))}
    </Routes> 
  </div>
);

export default App;
