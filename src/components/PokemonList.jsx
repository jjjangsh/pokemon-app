import { useContext } from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { PokemonContext } from "../contexts/PokemonContext";

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(150px, 1fr));
  gap: 20px;
  background-color: rgb(240, 240, 240);
  padding: 20px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 10px;
  max-width: 1300px;
  margin-top: 20px;
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const PokemonList = () => {
  const { selectedPokemon, pokemonList } = useContext(PokemonContext);
  return (
    <ListWrapper>
      <ListContainer>
        {pokemonList.map((pokemon) => {
          const isSelected = selectedPokemon.some((p) => p.id === pokemon.id);
          return (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              isSelected={isSelected}
            />
          );
        })}
      </ListContainer>
    </ListWrapper>
  );
};

export default PokemonList;
