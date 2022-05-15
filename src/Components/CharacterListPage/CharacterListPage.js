import React, { useEffect, useState } from "react";
import api from "../../Services/api";
import { Persona, Container, Button } from "./style";
import { Link } from "react-router-dom";

export default function CharacterListPage() {
  const [CharacterList, setCharacterList] = useState([]);

  //FUNÇÃO PARA REQUISIÇÃO: ELA LOGA OS RESULTADOS E SALVA ELE DENTRO DE UM ESTADO TIPO DE VETOR.
  async function getCharacterList() {
    await api
      .get("/characters")
      .then((data) => {
        console.log(data.data.data);
        setCharacterList(data.data.data);
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
    <Container>
      <Link to="/searchDungeons" >
        <Button>Pesquisar Locais</Button>
      </Link>

      {CharacterList.map((item, index) => {
        return (
          <Link to={`/${item.id}`} key={index}>
            {console.log(item.id)}
            <Persona>{item.name}</Persona>
          </Link>
        );
      })}
    </Container>
  );
}
