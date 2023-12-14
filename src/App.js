import Form from "./components/Form";
import "./App.css";

function App() {
  // // gets next page
  // async function nextPage() {
  //   await fetch(pokemon.next)
  //     .then((res) => res.json())
  //     .then((data) => setPokemon(data));

  //   return (
  //     <ul>
  //       {pokemon.results &&
  //         pokemon.results.map((item) => <Pokemon pokemon={item} />)}
  //     </ul>
  //   );
  // }

  // // get previous page
  // async function prevPage() {
  //   await fetch(pokemon.previous)
  //     .then((res) => res.json())
  //     .then((data) => setPokemon(data));

  //   return (
  //     <ul>
  //       {pokemon.results &&
  //         pokemon.results.map((item) => <Pokemon pokemon={item} />)}
  //     </ul>
  //   );
  // }
  function setData(props) {
    console.log(props);
  }

  return (
    <div className="App">
      <Form data={setData} />
      {/* <main>
        <ul>
          {pokemon.results &&
            pokemon.results.map((item) => <Pokemon pokemon={item} />)}
        </ul>
        {pokemon.previous == null ? null : (
          <button onClick={prevPage}>Previous</button>
        )}
        <button onClick={nextPage}>Next</button>
      </main> */}
    </div>
  );
}

// function Pokemon(props) {
//   return <li>{props.pokemon.name}</li>;
// }

export default App;
