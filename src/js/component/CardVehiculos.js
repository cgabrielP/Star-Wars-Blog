import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../store/appContext'

const CardVehiculos = ({name, uid}) => {
  
    const {actions} = useContext(AppContext);
  
    return (
      <div className="card" id="cartas">
        <img src="https://images.pexels.com/photos/997704/pexels-photo-997704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            to={`vehiculo/${uid}`}
            className="btn btn-dark"
            id="boton-personajes"
          >
            Ver más
          </Link>
          <button type="button" className="add-favoritos btn btn-light" onClick={() => actions.agregarFavoritos({uid, name, type:"vehiculo"})}>Añadir a favoritos</button>
  
        </div>
      </div>
    );
  };
export default CardVehiculos