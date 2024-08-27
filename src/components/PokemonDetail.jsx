import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 230px;
`;

const StyledBtn = styled.button`
  border: none;
  background-color: orange;
  padding: 6px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

function PokemonDetail({ pokemon }) {
  const navigate = useNavigate();

  return (
    <StyledDetailDiv>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <span>
        <p>타입: {pokemon.types.join(", ")}</p>
      </span>
      <span>
        <p>{pokemon.description}</p>
      </span>

      <StyledBtn
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로 가기
      </StyledBtn>
    </StyledDetailDiv>
  );
}

export default PokemonDetail;
