import React, { useEffect, useState } from "react";
import api from "../../Services/api";

export default function CharacterListPage() {
  const [CharacterList, setCharacterList] = useState([]);
  const [CharacterListComponents, setCharacterListComponents] = useState([]);

  const CardName = (item) =>{
      return <h1>{item.name}</h1>
  }

  //AO INICIAR ESSE ARQUIVO ELE CHAMA FUNÇÃO getCharacterList():
  useEffect(() => {
    getCharacterList();
  }, []);

  //ANALISAR DEPOIS:
  //FUNÇÃO PARA MAPEAR O VETOR DO ESTADO CharacterList E CRIANDO UM VETOR DE COMPONENTES:
  useEffect(() => {
    CharacterList.map(item => {
        setCharacterListComponents([...CharacterListComponents, <CardName item={item} />])
    })
  }, [CharacterList]);
  
  //SOMENTE TESTE:
  useEffect(() => {
    console.log(CharacterListComponents);
  }, [CharacterListComponents]);

  //FUNÇÃO PARA REQUISIÇÃO: ELA LOGA OS RESULTADOS E SALVA ELE DENTRO DE UM ESTADO TIPO DE VETOR.
  async function getCharacterList() {
    await api
      .get('/people')
      .then((data) => {
        // console.log(data.data.results)
        setCharacterList(data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return <></>;
}
