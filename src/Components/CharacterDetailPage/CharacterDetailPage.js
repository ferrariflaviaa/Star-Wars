import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


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
    <div>
      <h1>Detalhes</h1>
      <Link to="/" >
        <button type="submit" name="myButton" >Voltar</button>
      </Link>

      {CharacterDetails && (
        <div>
          <h1>Nome: {CharacterDetails.name}</h1>
          <h1>Descrição: {CharacterDetails.description}</h1>
          <h1>Genero: {CharacterDetails.gender === null ? 'Não informado' : CharacterDetails.gender}</h1>
          <h1>Raça: {CharacterDetails.race === null ? 'Não informado' : CharacterDetails.race}</h1>
        </div>
      )}

      
    </div>
  );
}
