import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pokemonCard.css';


const PokemonCard = ({ pokemonId }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`);
        setPokemonData(response.data);
      } catch (error) {
        console.error('Error message:', error);
      }
    };

    fetchPokemonData();
  }, [pokemonId]);

  if (!pokemonData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-card">
      <div className="pokemon-info">
        <p>ID: {pokemonData.id}</p>
        <p>Weight: {pokemonData.weight}</p>
        <p>Height: {pokemonData.height}</p>
      </div>
      <img
        className="pokemon-image"
        src={pokemonData.sprites.front_default}
        alt={`Pokemon ${pokemonData.name}`}
      />
    </div>
  );
};

export default PokemonCard;
