
import React, { useEffect, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, Route, Routes } from 'react-router-dom';
import Swal from 'sweetalert2';

import { AuthRouter } from './AuthRouter';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';


import { PublicRoute } from './PublicRoute';
import { loadingPlayersList } from '../actions/players';
import { useDispatch, useSelector } from 'react-redux';

import { auth } from '../firebase/firebase-config';


export const AppRouter = () => {

  const dispatch = useDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {loading} = useSelector(state => state.ui);  
  
  useEffect(() => {
  
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsAuthenticated(true);
          dispatch(loadingPlayersList(user.uid));  // call a func that load all players from Firestore
        } else {
          setIsAuthenticated(false);
        }
      });
      // setChecking(false);
 
  }, [dispatch, loading,setIsAuthenticated])

  if (loading) {
    return <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}} ><h3 >Cargando...</h3></div> 
  }
    

  

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
