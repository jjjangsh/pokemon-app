import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import DashBoard from "../components/DashBoard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const { selectedPokemon, addPokemon, removePokemon, pokemonList } =
    useContext(PokemonContext);

  return (
    <div>
      <DashBoard />
      <PokemonList />
    </div>
  );
};

export default Dex;
