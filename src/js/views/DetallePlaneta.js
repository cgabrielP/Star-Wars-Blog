import React, { useContext, useEffect } from "react";
import { AppContext } from "../store/appContext";
import { useParams } from "react-router-dom";

const DetallePlaneta = () => {
  const { uid } = useParams();
  const { store, actions } = useContext(AppContext);

  useEffect(() => {
    actions.getPlanetaById(`https://www.swapi.tech/api/planets/${uid}`);
  }, []);

  useEffect(() => {
    actions.getPlanetaById(`https://www.swapi.tech/api/planets${uid}`);
  }, [uid]);

  return (
    <div className="contenedor-general card mb-3">
      <img
        src="https://img.freepik.com/free-vector/futuristic-technology-dark-blue-background_87202-1321.jpg?w=996&t=st=1664725745~exp=1664726345~hmac=7af412aafd8ffb6b5e29b2ff119585847ac39435946285d3c19df4d5d836a8b7"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{store.planeta?.result?.properties?.name}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          deserunt harum, natus odio sequi delectus ea velit praesentium, sit,
          sunt quasi vel. Commodi, sapiente dolorem excepturi quasi cumque
          soluta quia!
          <br />
          <br />
          Algunos datos: <br />
          <ul>
            <li><i>Clima:</i>{store.planeta?.result?.properties?.climate}</li>
            <li><i>Terreno:</i>{store.planeta?.result?.properties?.terrain} </li>
            <li><i>Población:</i> {store.planeta?.result?.properties?.population} </li>
            <li><i>Diametro:</i>{store.planeta?.result?.properties?.diameter}  </li>
            <li><i>Periodo de rotación:</i>{store.planeta?.result?.properties?.rotation_period}  </li>
          </ul>
        </p>
        <p className="card-text">
          <small className="text-muted">{store.planeta?.result?.properties?.uid}</small>
        </p>
      </div>
    </div>
  );
};



export default DetallePlaneta;