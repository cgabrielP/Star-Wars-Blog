import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ name, uid, type,index }) => {
  return (
    <li className="dropdown-item" >
      <Link to={`/${type}/${uid}/detail`}>{name}</Link>
      <button className="fa-solid fa-trash-can my-2 btn"
        key={index}
        onClick={() => {
          actions.eliminarFavoritos(index);
        }}
      >
        </button>
      
    </li>
  );
};

export default Dropdown;
