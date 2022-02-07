import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";

import { useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroByName";
import { HeroCard } from "../heroe/HeroCard";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [{ searchText }, handleChange] = useForm({
    searchText: q,
  });

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search Screen</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1  w-100"
            >
              {" "}
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {q === "" ? (
            <div className="alert alert-info">Search an hero</div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className="alert alert-danger">
                there is not results: {q}
              </div>
            )
          )}
          {heroesFiltered.map((x) => (
            <HeroCard key={x.id} {...x} />
          ))}
        </div>
      </div>
    </>
  );
};
