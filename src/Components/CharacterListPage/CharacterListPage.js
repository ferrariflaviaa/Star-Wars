import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import { Persona } from "./style";
import { Link } from "react-router-dom";
export default function CharacterListPage() {
  const [CharacterList, setCharacterList] = useState([]);

  //FUNÇÃO PARA REQUISIÇÃO: ELA LOGA OS RESULTADOS E SALVA ELE DENTRO DE UM ESTADO TIPO DE VETOR.
  async function getCharacterList() {
    await api
      .get("/people")
      .then((data) => {
        console.log(data.data.results);
        setCharacterList(data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //AO INICIAR ESSE ARQUIVO ELE CHAMA FUNÇÃO getCharacterList():
  useEffect(() => {
    getCharacterList();
  }, []);

  return (
    <div>
      {CharacterList.map((item, index) => {
        return (
          <Link to={`/details/${index + 1}`}  key={index}>
            <Persona>{item.name}</Persona>
          </Link>
        );
      })}
    </div>
  );
}
