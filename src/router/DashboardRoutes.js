
import React from 'react';

import {  Route, Routes } from 'react-router-dom';

import { Navbar } from '../Components/Navbar';
import { NewPlayer } from '../Components/NewPlayer';
import { Ranking } from '../Components/Ranking';
import { Table } from '../Components/Table';
import { Legend } from '../Components/Legend';

export const DashboardRoutes = () => {

  return (
    <div>
        <Navbar />

        <Routes >
            <Route path="/" element={ <Table /> } />
            <Route path="ranking" element={ <Ranking /> } />
            <Route path="newplayer" element={ <NewPlayer /> } />
            <Route path="legend" element={ <Legend /> } />
        </Routes>
    </div>
  )
}
