import './App.css';
import React from 'react';
import PokemonCard from './components/pokemonCard.js';
import { useState } from 'react';


function App() {

  const numberOfPokemons = 20;
  const pokemonIdMainArray = Array.from({ length: numberOfPokemons }, (_, index) => index + 1); //cia
  const [pokemonId, setPokemonId] = useState(pokemonIdMainArray); //cia

  //cia
  function deleteHandler(deleteID) {
    setPokemonId(prevId => prevId.filter(id => id !== deleteID));
  }
  //cia

  return (
    <div className="App">
      <header className="App-header">
        Saved space here if something is needed in future
      </header>
      <div className="cards-section" >
        {pokemonId.map((pokemonId) => (
          <PokemonCard key={pokemonId} pokemonId={pokemonId} onClick={() => deleteHandler(pokemonId)}/> //cia
        ))}
      </div>
    </div>
  );
}

export default App;
