import { createContext, useState } from "react";
import MOCK_DATA from "../mock.js";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
      return;
    }
    if (!selectedPokemon.some((p) => p.id === pokemon.id)) {
      setSelectedPokemon((prevSelected) => [...prevSelected, pokemon]);
    }
  };

  const removePokemon = (pokemon) => {
    setSelectedPokemon((prevSelected) =>
      prevSelected.filter((p) => p.id !== pokemon.id)
    );
  };

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon,
        addPokemon,
        removePokemon,
        pokemonList: MOCK_DATA,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
