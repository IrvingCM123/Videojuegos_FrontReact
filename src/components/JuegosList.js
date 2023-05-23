import React from 'react';
import { useQuery, gql } from '@apollo/client';
import "../styles/Mostrar.css"

const FEED_QUERY = gql`
  
query {
  games {
    id
    juego
    fechaDeLanzamiento
    descripcion
    tipo
    creador
    personajes
    enemigos
    musica
    version
    precio
  }
  }
`
  ;
const JuegosList = () => {
  const { data } = useQuery(FEED_QUERY);

  return (

    <div>
      <span class="Mostrar_Titulo">Juegos Almacenados!: </span>

      {data && data.games.map((top) => {
        return (
          <div class="card card3">
            <div class="inner">
              <h2 class="title"> <p> ID:  {top.id} </p></h2>
              <div key={top.id}>
              <div className='subtitle'> Titulo del juego:
                  <span className='texto'> {top.juego} </span>
                </div>

                <div className='subtitle'> Fecha de lanzamiento:
                  <span className='texto'> {top.fechaDeLanzamiento} </span>
                </div>

                <div className='subtitle'> Descripcion del juego:
                  <span className='texto'> {top.descripcion} </span>
                </div>

                <div className='subtitle'> Tipo de juego:
                  <span className='texto'> {top.tipo} </span>
                </div>

                <div className='subtitle'> Creador del juego:
                  <span className='texto'> {top.creador} </span>
                </div>

                <div className='subtitle'> Personajes:
                  <span className='texto'> {top.personajes} </span>
                </div>

                <div className='subtitle'> Enemigos del juego:
                  <span className='texto'> {top.enemigos} </span>
                </div>

                <div className='subtitle'> Precio del juego:
                  <span className='texto'> {top.precio} </span>
                </div>

                <div className='subtitle'> Musica del juego:
                  <span className='texto'> {top.musica} </span>
                </div>

                <div className='subtitle'> Version del juego:
                  <span className='texto'> {top.version} </span>
                </div>
                
              </div>
            </div>
          </div>

        )
      })}

    </div>
  );
};

export default JuegosList;