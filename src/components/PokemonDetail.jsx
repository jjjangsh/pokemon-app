import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock.js";
import styled from "styled-components";

const StyledDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 230px;
`;

function PokemonDetail() {
  const [searchPokemonId, setsearchPokemonId] = useSearchParams(); // 포켓몬 ID 를 쿼리스트링으로부터 받아옵시다.
  const pokemonId = searchPokemonId.get("id");
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(pokemonId));
  const navigate = useNavigate();

  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

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

      <button
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로 가기
      </button>
    </StyledDetailDiv>
  );
}

export default PokemonDetail;
