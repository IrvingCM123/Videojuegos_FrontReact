import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import "../styles/GuardarInfo.css"

const CREATE_JUEGO_MUTATION = gql`
mutation PostMutation(
  $juego: String!
  $fechaDeLanzamiento: String!
  $descripcion: String!
  $tipo: String!
  $creador: String!
  $personajes: String!
  $enemigos: String!
  $musica: String!
  $version: String!
  $precio: Int!
  ) {
    createGame(juego: $juego, fechaDeLanzamiento: $fechaDeLanzamiento, descripcion: $descripcion, tipo: $tipo, creador: $creador, personajes: $personajes, enemigos: $enemigos, musica: $musica, version: $version, precio: $precio) {
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
`;


const CreateJuegos = () => {
  const [formState, setFormState] = useState({
    id: '',
    juego: '',
    fechaDeLanzamiento: '',
    descripcion: '',
    tipo: '',
    creador: '',
    personajes: '',
    enemigos: '',
    musica: '',
    version: '',
    precio: 0,
  });

  const [CreateJuegos] = useMutation(CREATE_JUEGO_MUTATION, {
    variables: {
      juego: formState.juego,
      fechaDeLanzamiento: formState.fechaDeLanzamiento,
      descripcion: formState.descripcion,
      tipo: formState.tipo,
      creador: formState.creador,
      personajes: formState.personajes,
      enemigos: formState.enemigos,
      musica: formState.musica,
      version: formState.version,
      precio: formState.precio,
    }
  });

  return (
    <div class="About-us sombra" id="Caja">

      <section class="About-us-Titulo H1 Espacio" id="Titulo">
        Por favor llena los siguientes recuadros
      </section>

      <div id="Formulario-Info">
        <p class="Espacio Espacio2" >Juego: </p>
        <p class="Espacio Espacio2">Lanzamiento: </p>
        <p class="Espacio Espacio2">Descripcion: </p>
        <p class="Espacio Espacio2">Tipo: </p>
        <p class="Espacio Espacio2" >Creador: </p>
        <p class="Espacio Espacio2">Personajes: </p>
        <p class="Espacio Espacio2">Enemigos: </p>
        <p class="Espacio Espacio2">Musica: </p>
        <p class="Espacio Espacio2">version: </p>
        <p class="Espacio Espacio2">Precio: </p>
      </div>

      <div id="Formulario-Rellenar" >

        <form onSubmit={(e) => { e.preventDefault(); CreateJuegos(); }} >

          <div className="Espacio" >
            <input className="Respuesta" value={formState.juego} onChange={(e) =>
              setFormState({ ...formState, juego: e.target.value })}
              type="text" placeholder="Titulo del juego" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.fechaDeLanzamiento} onChange={(e) =>
              setFormState({ ...formState, fechaDeLanzamiento: e.target.value })}
              type="text" placeholder="Lanzamiento del juego" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.descripcion} onChange={(e) =>
              setFormState({ ...formState, descripcion: e.target.value })}
              type="text" placeholder="descripcion del juego" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.tipo} onChange={(e) =>
              setFormState({ ...formState, tipo: e.target.value })}
              type="text" placeholder="tipo del juego" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.creador} onChange={(e) =>
              setFormState({ ...formState, creador: e.target.value })}
              type="text" placeholder="creador del juego" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.personajes} onChange={(e) =>
              setFormState({ ...formState, personajes: e.target.value })}
              type="text" placeholder="personajes del juego" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.enemigos} onChange={(e) =>
              setFormState({ ...formState, enemigos: e.target.value })}
              type="text" placeholder="enemigos del juego" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.musica} onChange={(e) =>
              setFormState({ ...formState, musica: e.target.value })}
              type="text" placeholder="musica del juego" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.version} onChange={(e) =>
              setFormState({ ...formState, version: e.target.value })}
              type="text" placeholder="version del juego" />
          </div>

          <div className="Espacio" >
            <input className="Respuesta" value={formState.precio} onChange={(e) =>
              setFormState({ ...formState, precio: e.target.value })}
              type="number" placeholder="precio del juego" />
          </div>

          <div id="Formulario-Boton">
              <input type="submit" name="Mensaje" value="Enviar" class="Boton"></input>
          </div>
        </form>
      </div>

      <div class="Informacion">
        <h1 class="H1">Contactar Alumno: </h1>
        <ul>
          <li>Número Telefonico: <br></br> <p>+52 272 259 4250</p></li>
          <li>Correo Electronico: <br></br> <p> S20020314@estudiantes.uv.mx</p></li>
          <li>Matricula <br></br> <p>S20020314 </p> </li>
        </ul>
      </div>
    </div>
  );
};

export default CreateJuegos;