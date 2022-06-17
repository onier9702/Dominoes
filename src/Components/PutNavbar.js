
import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { startLogout } from '../actions/auth';


import '../styles/PutNavbar.css';


export const PutNavbar = ({isMob,closeMenu}) => {

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch( startLogout() );
    };

  return (

    <nav className="navigation">
        <ul >
            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/dashboard/" className="link" aria-current="page" >Tabla</Link>
            </li>
            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/dashboard/ranking" className="link" >Ranking</Link>
            </li>
            <li>
                <Link  onClick={() => (isMob) && closeMenu() }  to="/dashboard/newplayer" className="link" >AgregarJugador</Link>
            </li>

            <li>
                <Link  onClick={() => (isMob) && closeMenu() } to="/dashboard/legend" className="link" >Leyenda</Link>
            </li>
    
            <li >
                <button
                    type="button"
                    className="logout"
                    onClick={handleLogout}
                >Logout</button>
            </li>
        </ul>
    </nav>
  )
}
