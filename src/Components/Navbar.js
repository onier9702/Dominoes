
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
export const Navbar = () => {


  return (
    <div>
        <nav >
            <div className="navigation">
                <ul >
                    <li>
                        <Link className="link" aria-current="page" to="/table">Tabla</Link>
                    </li>
                    <li>
                        <Link className="link" to="/ranking">Ranking</Link>
                    </li>
                    <li>
                        <Link className="link" to="/newplayer">AgregarJugador</Link>
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
