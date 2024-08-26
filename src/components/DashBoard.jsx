import { useState } from "react";
import pokeBall from "../assets/pokeBall.webp";
import styled from "styled-components";

const StyledPokeBallDiv = styled.div`
  height: ${({ $isSelected }) => ($isSelected ? "180px" : "100px")};
  width: ${({ $isSelected }) => ($isSelected ? "130px" : "100px")};
  border: 3px dashed rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  border-radius: 15px;
  background-color: white;
  flex-direction: column;
  transition: height 0.3s ease-in-out;
`;

const StyledPokeBallContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const StyledH2AndDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 1210px;
  background-color: rgb(240, 240, 240);
  margin-top: 40px;
  border-radius: 12px;
`;

const StyledImg = styled.img`
  width: ${({ $isSelected }) => ($isSelected ? "85px" : "50px")};
  height: ${({ $isSelected }) => ($isSelected ? "85px" : "50px")};
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out;
`;

const StyledPokemonName = styled.p`
  margin-top: 1px;
  margin-bottom: 6px;
  font-size: 14px;
  color: #333;
  font-weight: bold;
`;

const StyledRemoveButton = styled.button`
  border: none;
  border-radius: 3px;
  background-color: rgb(153, 153, 153);
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #da1e1e;
  }
`;

const Dashboard = ({ selectedPokemon, onRemovePokemon }) => {
  const totalPokeBall = 6;
  const emptyPokeBall = totalPokeBall - selectedPokemon.length;

  const [selected, setSelected] = useState(true);
  const [notSelected, setNotSelected] = useState(false);

  const removePokemonHandler = (pokemon) => {
    onRemovePokemon(pokemon);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <StyledH2AndDiv>
        <h2>나만의 포켓몬</h2>
        <StyledPokeBallContainer>
          {selectedPokemon.map((pokemon) => (
            <StyledPokeBallDiv key={pokemon.id} $isSelected={selected}>
              <StyledImg
                src={pokemon.img_url}
                alt={pokemon.korean_name}
                $isSelected={selected}
              />
              <StyledPokemonName>{pokemon.korean_name}</StyledPokemonName>
              <StyledPokemonName>{`No.${pokemon.id
                .toString()
                .padStart(3, "0")}`}</StyledPokemonName>
              <StyledRemoveButton onClick={() => removePokemonHandler(pokemon)}>
                삭제
              </StyledRemoveButton>
            </StyledPokeBallDiv>
          ))}
          {Array.from({ length: emptyPokeBall }).map((_, i) => (
            <StyledPokeBallDiv key={i} $isSelected={notSelected}>
              <StyledImg
                src={pokeBall}
                alt="빈 포켓볼"
                $isSelected={notSelected}
              />
            </StyledPokeBallDiv>
          ))}
        </StyledPokeBallContainer>
      </StyledH2AndDiv>
    </div>
  );
};

export default Dashboard;
