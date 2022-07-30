import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLinks } from '../common/constants';

const AppRoutes:FC = () => {
  return (
    <>
      <Routes>
        {AppLinks.map(({link, Component }) => (
            <Route path={link} key={link} element={<Component />}  />
        ))}
      </Routes> 
    </>
  );
}

export default AppRoutes;
