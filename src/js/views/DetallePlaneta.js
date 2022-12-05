import React, { useContext, useEffect } from "react";
import { AppContext } from "../store/appContext";
import { useParams } from "react-router-dom";
import '../../styles/index.css'

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
    <div className="container contenedor card my-3 ">
      <img
        src="https://th.bing.com/th/id/OIP.hnrI-IT31UB9-VX0K0CJCQHaE8?pid=ImgDet&rs=1"
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
            <li>Clima: {store.planeta?.result?.properties?.climate}</li>
            <li>Terreno: {store.planeta?.result?.properties?.terrain} </li>
            <li>Población:  {store.planeta?.result?.properties?.population} </li>
            <li>Diametro: {store.planeta?.result?.properties?.diameter}  </li>
            <li>Periodo de rotación: {store.planeta?.result?.properties?.rotation_period}  </li>
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