import React, { useState } from "react";
import "./Form.css";

function Form({ data }) {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    getPokemonData();
  }

  async function getPokemonData() {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.log(error));
  }

  const pokemonObj = {
    id: pokemon.id,
    name: pokemon.name,
    base_experience: pokemon.base_experience,
    height: pokemon.height,
    is_default: pokemon.is_default,
    order: pokemon.order,
    weight: pokemon.weight,
    abilities: pokemon.abilities,
    forms: pokemon.forms,
    game_indices: pokemon.game_indices,
    held_items: pokemon.held_items,
    moves: pokemon.moves,
    species: pokemon.species,
    sprites: pokemon.sprites,
  };
  console.log(pokemonObj);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pokemon name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button style={name === "" ? { display: "none" } : {}}>Search</button>
    </form>
  );
}

export default Form;
