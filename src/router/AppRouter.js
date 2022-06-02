
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';


import { PublicRoute } from './PublicRoute';
import { loadingPlayersList } from '../actions/players';
import { useDispatch } from 'react-redux';

import { auth } from '../firebase/firebase-config';


export const AppRouter = () => {

  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
  
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsAuthenticated(true);
          dispatch(loadingPlayersList(user.uid));  // call a func that load all players from Firestore
        } else {
          setIsAuthenticated(false);
        }
      });
 
  }, [dispatch,setIsAuthenticated])



  return (
    <div >

        <Routes >

          <Route path="/" element={<Navigate to="/auth" />} />

            <Route path="dashboard/*" element={ 
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <DashboardRoutes />
              </PrivateRoute>} 
            />




            <Route path="auth/*" element={ 
               <PublicRoute isAuthenticated={isAuthenticated}>
                 <AuthRouter />
               </PublicRoute>} 
            />

        </Routes>
    </div>
  )
}
