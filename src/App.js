import logo from './logo.svg';
import './App.css';
import React from 'react';
import PokemonCard from './components/pokemonCard.js';



function App() {

  const numberOfPokemons = 20;
  const pokemonIds = Array.from({ length: numberOfPokemons }, (_, index) => index + 1);


  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <div className="cards-section">
        {pokemonIds.map((pokemonId) => (
          <PokemonCard key={pokemonId} pokemonId={pokemonId} />
        ))}
      </div>
    </div>
  );
}

export default App;
