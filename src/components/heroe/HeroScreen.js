import React from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroByID";
import { useMemo } from "react";

export const HeroScreen = () => {
  const { id } = useParams();

  const heroFound = useMemo(() => getHeroesById(id), [id]);

  const navigate = useNavigate();

  const handleReturn = () => {
    navigate(-1);
  };

  if (!heroFound) {
    return <Navigate to="/" />;
  }
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    heroFound;
  const imagePath = `/assets/${heroFound.id}.jpg`;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={imagePath}
          alt={superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8  animate__animated animate__fadeIn">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b> {first_appearance}
          </li>
        </ul>
        <h5 className="mt-5">Character</h5>
        <p>{characters}</p>
        <button className="btn btn-outline-info" onClick={handleReturn}>
          Regresar
        </button>
      </div>
    </div>
  );
};
