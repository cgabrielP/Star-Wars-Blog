import React, { useContext, useEffect } from "react";
import { AppContext } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetallePersonaje = () => {
  const { uid } = useParams();
  const { store, actions } = useContext(AppContext);

  useEffect(() => {
    actions.getPersonajeById(`https://www.swapi.tech/api/people/${uid}`);
  }, []);

  useEffect(() => {
    actions.getPersonajeById(`https://www.swapi.tech/api/people/${uid}`);
  }, [uid]);

  return (
    <>
     <div className="container contenedor card my-3 ">
      <img
        src="https://th.bing.com/th/id/OIP.hnrI-IT31UB9-VX0K0CJCQHaE8?pid=ImgDet&rs=1"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{store.personaje?.result?.properties?.name}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          deserunt harum, natus odio sequi delectus ea velit praesentium, sit,
          sunt quasi vel. Commodi, sapiente dolorem excepturi quasi cumque
          soluta quia!
          <br />
          <br />
          Algunos datos: <br />
          <ul>
            <li>Clima: {store.personaje?.result?.properties?.climate}</li>
            <li>Terreno: {store.personaje?.result?.properties?.terrain} </li>
            <li>Población:  {store.personaje?.result?.properties?.population} </li>
            <li>Diametro: {store.personaje?.result?.properties?.diameter}  </li>
            <li>Periodo de rotación: {store.personaje?.result?.properties?.rotation_period}  </li>
          </ul>
        </p>
        <p className="card-text">
          <small className="text-muted">{store.personaje?.result?.properties?.uid}</small>
        </p>
      </div>
    </div>

    </>
  );
};

DetallePersonaje.defaultProps = {
  uid: "00123",
  name: "Alien",
  birth_year: "2000BC",
  eye_color: "blue",
  gender: "Something",
  height: "2m",
  skin_color: "transparent",
};

export default DetallePersonaje;
