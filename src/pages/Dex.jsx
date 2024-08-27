import MOCK_DATA from "../mock.js";
import PokemonList from "../components/PokemonList.jsx";
import DashBoard from "../components/DashBoard.jsx";
import { useState } from "react";

const Dex = () => {
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
    <div>
      <DashBoard
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
      <PokemonList
        pokemonList={MOCK_DATA}
        onAddPokemon={addPokemon}
        selectedPokemon={selectedPokemon}
      />
    </div>
  );
};

export default Dex;
