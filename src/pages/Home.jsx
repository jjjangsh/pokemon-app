import { useNavigate } from "react-router-dom";
import pokemonLogo from "../assets/pokemonLogo.png";
import styled, { createGlobalStyle } from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const StyledButton = styled.button`
  border: none;
  background-color: red;
  font-size: 20px;
  padding: 8px;
  color: #f4dfdf;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
`;

const GlobalStyle = createGlobalStyle`
  body {
  background-color: #ed9121;
}
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <GlobalStyle />
      <StyledDiv
        style={{
          top: "150px",
        }}
      >
        <img src={pokemonLogo} alt="Pokemon Logo" className="logo" />
        <StyledButton
          onClick={() => {
            navigate("/dex");
          }}
        >
          포켓몬 도감 시작하기
        </StyledButton>
      </StyledDiv>
    </>
  );
};

export default Home;
