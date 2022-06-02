
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Route, Routes } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';


import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {


  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const auth = getAuth();
  
  useEffect(() => {
  
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log('The user onAuthStateChange: ' + user);
          console.log(user.uid);
          setIsAuthenticated(true);
        } else {
          console.log('Signout');
          setIsAuthenticated(false);
        }
      });
 
  }, [setIsAuthenticated])



  return (
    <div >

        <Routes >

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
            {/* <Route path="*" element={<Navigate to="/" />} /> */}

        </Routes>
    </div>
  )
}
