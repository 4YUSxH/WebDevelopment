import axios from "axios";
import React, { useEffect, useState } from "react";

const Pokemoncard = (props) => {
  const [pokemone, setPokemone] = useState(null);

  useEffect(() => {
    let getUrlData = async () => {
      let res = await axios.get(`${props.elem.url}`);
      setPokemone(res.data);
    };
    getUrlData();
  }, [props.elem.url]);

  if (!pokemone) return <p className="loading">Loading...</p>;

  return (
    <div className="pokemon-card">
      <div className="pokemon-header">
        <h2 className="pokemon-name">{props.elem.name}</h2>
        <span className="pokemon-id">#{pokemone.id}</span>
      </div>

      <div className="pokemon-image-wrapper">
        <img
          className="pokemon-image"
          src={pokemone.sprites.front_default}
          alt={pokemone.name}
        />
      </div>

      <div className="pokemon-section type">
        <span className="badge">{pokemone.types[0].type.name}</span>
      </div>

      <div className="pokemon-section">
        <h4>Abilities</h4>
        <p>
          {pokemone.abilities[0].ability.name},{" "}
          {pokemone.abilities[1].ability.name}
        </p>
      </div>

      <div className="pokemon-section">
        <h4>Base Stats</h4>

        <div className="stat">
          <span>HP</span>
          <div className="bar">
            <div style={{ width: `${pokemone.stats[0].base_stat}%` }} />
          </div>
        </div>

        <div className="stat">
          <span>ATK</span>
          <div className="bar">
            <div style={{ width: `${pokemone.stats[1].base_stat}%` }} />
          </div>
        </div>

        <div className="stat">
          <span>DEF</span>
          <div className="bar">
            <div style={{ width: `${pokemone.stats[2].base_stat}%` }} />
          </div>
        </div>

        <div className="stat">
          <span>SPD</span>
          <div className="bar">
            <div style={{ width: `${pokemone.stats[3].base_stat}%` }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemoncard;
