
import React, {useState } from 'react';
import { PutNavbar } from './PutNavbar';
import '../styles/Navbar.css';



export const Navbar = () => {


    const [active, setActive] = useState(false);

    const closeMenu = () => setActive(false);

    const handleClick = (e) => {
        e.preventDefault();
        setActive(!active);
    };


  return (

    <div className="navigation-div">
    
        {
            (active) ?  <i onClick={handleClick} class="bi bi-x-circle" ></i>  :  <i onClick={handleClick} className="bi bi-list" ></i>  
        }
        {
            (active) && <PutNavbar isMob={true} closeMenu={closeMenu}/>
        }
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
