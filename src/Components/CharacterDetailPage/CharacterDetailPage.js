import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card, Label, Container, Title } from "./style";

export default function CharacterDetailPage() {
  const [CharacterDetails, setCharacterDetails] = useState(); 
  const params = useParams();
  const peopleId = params.id;

  async function getCharacterDetails() {
    await api
      .get(`/characters/${peopleId}`)
      .then((response) => {
        console.log(response);
        setCharacterDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getCharacterDetails();
  }, []);

  
  return (
    <Container>
      <Title>Detalhes</Title>
      <Link to="/" >
        <button type="submit" name="myButton" >Voltar</button>
      </Link>

      {CharacterDetails && (
        <Card>
          <Label>Nome: {CharacterDetails.name}</Label>
          <Label>Descrição: {CharacterDetails.description}</Label>
          <Label>Genero: {CharacterDetails.gender === null ? 'Não informado' : CharacterDetails.gender}</Label>
          <Label>Raça: {CharacterDetails.race === null ? 'Não informado' : CharacterDetails.race}</Label>
        </Card>
      )}

      
    </Container>
  );
}
