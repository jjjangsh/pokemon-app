import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Button = styled.button`
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

const PokemonCard = ({ pokemon, onAdd, isSelected }) => {
  const navigate = useNavigate();

  const addPokemonHandler = (e) => {
    e.stopPropagation();

    if (isSelected) {
      alert("이미 추가한 포켓몬입니다!");
    } else {
      onAdd(pokemon);
    }
  };

  return (
    <Card
      onClick={() => {
        navigate(`/detail?id=${pokemon.id}`);
      }}
    >
      <img src={pokemon.img_url} alt={""} />
      <p>
        <b>{pokemon.korean_name}</b>
      </p>
      <h6>{`No.${pokemon.id.toString().padStart(3, "0")}`}</h6>
      <Button onClick={addPokemonHandler}>추가</Button>
    </Card>
  );
};

export default PokemonCard;
