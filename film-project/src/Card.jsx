import React from "react";

const Card = ({ film }) => {
  return (
    <div className="card">
      <img src={film.coverImage} alt={film.name} />
      <h3>{film.name}</h3>
      <div className="p">
        <p>Yil: {film.year}</p>
        <p>Yonetmen: {film.director}</p>
      </div>
    </div>
  );
};

export default Card;
