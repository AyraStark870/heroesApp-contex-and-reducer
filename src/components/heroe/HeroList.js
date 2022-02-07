import React from "react";
import { useMemo } from "react";

import { getHeroesByPublisher } from "../../selectors/getHeroByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  //una funcion interna que regresa un valor
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className=" row rows-cols-1 row-cols-3 g-3 animate__animated animate__fadeIn">
      {" "}
      {heroes.map((x) => (
        <HeroCard key={x.id} {...x} />
      ))}
    </div>
  );
};
