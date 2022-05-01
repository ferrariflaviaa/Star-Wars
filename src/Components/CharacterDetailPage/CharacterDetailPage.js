import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import { useParams } from "react-router-dom";

export default function CharacterDetailPage() {
  const [CharacterDetails, setCharacterDetails] = useState();  
  const params = useParams();
  const peopleId = params.id;

  async function getCharacterDetails() {
    await api
      .get(`/people/${peopleId}`)
      .then((data) => {
        console.log(data.data);
        setCharacterDetails(data.data.results);
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
      <h1>Detalhe</h1>
    </div>
  );
}
