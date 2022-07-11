import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from '../components/login/Login';
import { RouterDashboard } from './RouterDashboard';

export const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/Login' element={<Login/>}></Route>
                <Route path='/*' element={<RouterDashboard/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
