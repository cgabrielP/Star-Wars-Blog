import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="text-center my-5">
    <h1>Star-Wars Blog!</h1>
	<p>Toca la imagen</p>
    <Link to={"/personajes"}>
      <img
        src="https://th.bing.com/th/id/OIP.ojAFHFVKBWt2EXJyb2kzlQHaHJ?pid=ImgDet&w=699&h=675&rs=1"
        alt="Mando"
      ></img>
    </Link>
  </div>
);
