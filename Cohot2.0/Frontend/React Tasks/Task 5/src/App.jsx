import axios from "axios";
import PokemonCard from "./components/Pokemoncard";
import { useState } from "react";

const App = () => {
  const [allPokemons, setAllPokemons] = useState([]);

  let getData = async () => {
    let response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=10"
    );
    setAllPokemons(response.data.results);
  };

  return (
    <>
      <button className="btn" onClick={getData}>
        Generate Card
      </button>

      <div className="card-grid">
        {allPokemons.map((elem, idx) => (
          <PokemonCard key={idx} idx={idx} elem={elem} />
        ))}
      </div>
    </>
  );
};

export default App;
