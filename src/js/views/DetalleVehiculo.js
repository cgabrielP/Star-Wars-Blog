import React, { useContext, useEffect } from "react";
import { AppContext } from "../store/appContext";
import { useParams } from "react-router-dom";
import '../../styles/index.css'

const DetalleVehiculo = () => {
  const { uid } = useParams();
  const { store, actions } = useContext(AppContext);

  useEffect(() => {
    actions.getVehiculoById(`https://www.swapi.tech/api/vehicles/${uid}`);
  }, []);

  useEffect(() => {
    actions.getVehiculoById(`https://www.swapi.tech/api/vehicles/${uid}`);
  }, [uid]);

  return (
    <div className="container contenedor card my-3">
      <img
        src="https://th.bing.com/th/id/OIP.hnrI-IT31UB9-VX0K0CJCQHaE8?pid=ImgDet&rs=1"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{store.vehiculo?.result?.properties?.name}</h5>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          deserunt harum, natus odio sequi delectus ea velit praesentium, sit,
          sunt quasi vel. Commodi, sapiente dolorem excepturi quasi cumque
          soluta quia!
          <br />
          <br />
          Algunos datos: <br />
          <ul>
            <li>Modelo: {store.vehiculo?.result?.properties?.model}</li>
            <li>Clase: {store.vehiculo?.result?.properties?.vehicle_class} </li>
            <li>Tripulación:  {store.vehiculo?.result?.properties?.crew} </li>
            <li>Longitud: {store.vehiculo?.result?.properties?.length}  </li>
            <li>Costo: {store.vehiculo?.result?.properties?.cost_in_credits}  </li>
          </ul>
        </p>
        <p className="card-text">
          <small className="text-muted">{store.vehiculo?.result?.properties?.uid}</small>
        </p>
      </div>
    </div>
  );
};



export default DetalleVehiculo;