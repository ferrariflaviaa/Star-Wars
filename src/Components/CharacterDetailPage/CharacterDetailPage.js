import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


export default function CharacterDetailPage() {
  const [CharacterDetails, setCharacterDetails] = useState();  
  const [planet, setPlanet] = useState();  
  const params = useParams();
  const peopleId = params.id;

  async function getCharacterDetails() {
    await api
      .get(`/people/${peopleId}`)
      .then((response) => {
        // console.log(response.data);
        setCharacterDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function getHomeworldDetails(planetId) {
    await api
      .get(`/planets/${planetId}`)
      .then((response) => {
        // console.log(response.data);
        setPlanet(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getCharacterDetails();
  }, []);

  //Verifica se ele não esta vazio o estado do planeta.
  useEffect(() => {
    if(CharacterDetails){
      getHomeworldDetails(CharacterDetails.homeworld.substr(30));
      // console.log(CharacterDetails.homeworld.substr(30));
    }
  }, [CharacterDetails]);

  
  return (
    <div>
      <h1>Detalhes</h1>
      <Link to="/" >
        <button type="submit" name="myButton" >Voltar</button>
      </Link>

      {CharacterDetails && (
        <div>
          <h1>Nome: {CharacterDetails.name}</h1>
          <h1>Ano de Nascimento: {CharacterDetails.birth_year}</h1>
          <h1>Criado: {CharacterDetails.created}</h1>
          <h1>Editado: {CharacterDetails.edited}</h1>
          <h1>Cor dos olhos: {CharacterDetails.eye_color}</h1>
          <h1>Altura: {CharacterDetails.height}</h1>
          <h1>Cor dos olhos: {CharacterDetails.eye_color}</h1>
          <h1>Gênero: {CharacterDetails.gender === 'n/a' ? 'Não informado' : CharacterDetails.gender} </h1>
          <h1>Cor do cabelo: {CharacterDetails.hair_color === 'n/a' ? 'Não informado' : CharacterDetails.hair_color} </h1>
          {planet && (
            <h1>Cidade natal: {planet.name}</h1>
          )}
        </div>
      )}

      
    </div>
  );
}
