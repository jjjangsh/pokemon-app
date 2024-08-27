import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../contexts/PokemonContext";
import PokemonDetail from "../components/PokemonDetail";

const Detail = () => {
  const { pokemonList } = useContext(PokemonContext);
  const { id } = useParams();
  const pokemon = pokemonList.find((p) => p.id === Number(id));

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <PokemonDetail pokemon={pokemon} />
    </div>
  );
};

export default Detail;
