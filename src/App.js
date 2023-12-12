import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    const data = getPokemonAPI();
    setPokemon(data);
  }, []);

  async function getPokemonAPI() {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=15")
      .then((res) => res.json())
      .then((data) => setPokemon(data));
  }

  const nextPage = async () => {
    await fetch(pokemon.next)
      .then((res) => res.json())
      .then((data) => setPokemon(data));

    return (
      <ul>
        {pokemon.results &&
          pokemon.results.map((item) => <Pokemon pokemon={item} />)}
      </ul>
    );
  };

  const prevPage = async () => {
    await fetch(pokemon.previous)
      .then((res) => res.json())
      .then((data) => setPokemon(data));

    return (
      <ul>
        {pokemon.results &&
          pokemon.results.map((item) => <Pokemon pokemon={item} />)}
      </ul>
    );
  };

  return (
    <div className="App">
      <main>
        <ul>
          {pokemon.results &&
            pokemon.results.map((item) => <Pokemon pokemon={item} />)}
        </ul>
        {pokemon.previous == null ? null : (
          <button onClick={prevPage}>Previous</button>
        )}
        <button onClick={nextPage}>Next</button>
      </main>
    </div>
  );
}

function Pokemon(props) {
  return <li>{props.pokemon.name}</li>;
}

export default App;
