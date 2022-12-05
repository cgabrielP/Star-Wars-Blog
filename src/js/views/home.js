import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => (
  <div className="text-center mt-5">
    <h1>Star-Wars Blog!</h1>
	<p>Toca la imagen</p>
    <Link to={"/personajes"}>
      <img
        src="https://i.pinimg.com/originals/e7/7f/23/e77f23e671c4d38973513c32e7eaf492.jpg"
        alt="Mando"
      ></img>
    </Link>
  </div>
);
