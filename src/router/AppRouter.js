
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';


import { Ranking } from '../Components/Ranking';
import { Table } from '../Components/Table';
import { NewPlayer } from '../Components/NewPlayer';
import { Navbar } from '../Components/Navbar';

export const AppRouter = () => {
  return (
    <div >
        <Navbar />

        <Routes >
            <Route path="/table" element={ <Table /> } />
            <Route path="/ranking" element={ <Ranking /> } />
            <Route path="/newplayer" element={ <NewPlayer /> } />

            <Route path="*" element={ <Navigate to="/table" /> } />
        </Routes>
    </div>
  )
}
