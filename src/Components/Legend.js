
import React from 'react';
import '../styles/Leyend.css';

export const Legend = () => {

  return (
    <div style={{padding:30}}>
        <h1>Leyenda</h1>
        <hr />

        <h4 style={{marginTop:10, marginBottom:10}} >Tabla</h4>
        <div className="legeng-tittle">
            <h5> JJ: </h5>
            <p>  Juegos Jugados</p>
        </div>

        <div className="legeng-tittle">
            <h5>  G: </h5>
            <p>  Juegos Ganados</p>
        </div>

        <div className="legeng-tittle">
            <h5>  P: </h5>
            <p> Juegos Perdidos</p>
        </div>

        <div className="legeng-tittle" >
            <h5>  Dif: </h5>
            <p>  Diferencia de Ganados y Perdidos</p>
        </div>

        <div className="legeng-tittle">
            <h5>  %G: </h5>
            <p>  Porciento de Ganados</p>
        </div>

        <div  className="legeng-tittle">
            <h5>  %P: </h5>
            <p>  Porciento de Perdidos</p>
        </div>

        <h4 style={{marginTop:10, marginBottom:10}} >Editar</h4>
        <div  className="legeng-tittle"> 
            <p> Agrege los Ganados y Perdidos que usted quiera ponerle a su jugador</p>
        </div>


    </div>
  )
}
