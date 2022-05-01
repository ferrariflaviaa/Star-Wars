import React, { useEffect, useState } from "react";
import api from "../../Services/api";

export default function CharacterListPage() {
  const [CharacterList, setCharacterList] = useState([]);

    //FUNÇÃO PARA REQUISIÇÃO: ELA LOGA OS RESULTADOS E SALVA ELE DENTRO DE UM ESTADO TIPO DE VETOR.
    async function getCharacterList() {
      await api
        .get('/people')
        .then((data) => {
          console.log(data.data.results)
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
        {CharacterList.map(item => {
           return <h1 key={item.name+item.birth_year}>{item.name}</h1>
        })}
      </div>
  );
}
