
import React, { useEffect, useRef, useState } from 'react';
import { PutNavbar } from './PutNavbar';
import '../styles/Navbar.css';



export const Navbar = () => {


    const [active, setActive] = useState(false);

    const closeMenu = () => setActive(false);

    const handleClick = (e) => {
        e.preventDefault();
        setActive(!active);
    };

    const iconRef = useRef(null);
    const divContainer = useRef(null);

    useEffect(() => {
       
        if (active === true) {

            document.addEventListener('click', (e) => {
              e.preventDefault();
              if ( !(divContainer.current.contains(e.target)) && !(iconRef.current.contains(e.target))) {
                setActive(false);
              }
              
            })
        }
      
        return () => {
          document.removeEventListener('click', () => {});
          // setOpen(false);
        }
      }, [active])
    


  return (

    <div className="navigation-div" ref={divContainer}>
    
        {
            (active) ?  <i onClick={handleClick} class="bi bi-x-circle" ref={iconRef} ></i>  :  <i onClick={handleClick} className="bi bi-list" ref={iconRef} ></i>  
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
