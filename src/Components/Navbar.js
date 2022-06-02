
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import '../styles/Navbar.css';



export const Navbar = () => {

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch( startLogout() );
    };

  return (
    <div>
        <nav >
            <div className="navigation">
                <ul >
                    <li>
                        <Link  to="/dashboard/" className="link" aria-current="page" >Tabla</Link>
                    </li>
                    <li>
                        <Link  to="/dashboard/ranking" className="link" >Ranking</Link>
                    </li>
                    <li>
                        <Link  to="/dashboard/newplayer" className="link" >AgregarJugador</Link>
                    </li>
                    <li >
                        <button
                            type="button"
                            className="logout"
                            onClick={handleLogout}
                        >Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
     
    </div>
  )
}



{/* <li className="nav-item">
<Link className="nav-link active" aria-current="page" to="/table">Tabla</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/ranking">Ranking</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/newplayer">Nuevo Jugador</Link>
</li> */}
