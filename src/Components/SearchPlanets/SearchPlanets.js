import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import { Persona } from '../CharacterListPage/style';

function SearchPlanets() {

    const [filteredPlanets, setFilteredPlantes] = useState([]);
    const [searchValue, setSeearchValue] = useState('');

    async function loadPlanets() {
        await api.get('/places')
            .then((response) => {
                console.log(response.data.data);
                setFilteredPlantes(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    async function filterloadDungeons() {
        await api.get(`/places?name=${searchValue}`)
            .then((response) => {
                console.log(response.data.data);
                setFilteredPlantes(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadPlanets();
    }, [])
    
    useEffect(() => {
        if(searchValue === ''){
            loadPlanets();
        }else{
            filterloadDungeons();
        }
    }, [searchValue])

    return (
        <div>
            <input value={searchValue} onChange={event => setSeearchValue(event.target.value)}/>
            <h1>Dungeons</h1>
            {filteredPlanets.map((item, index) => {
                return (
                    <Link to={`/searchPlanets/${item.id}`} key={index}>
                        <Persona>{item.name}</Persona>
                    </Link>
                );
            })}
        </div>
    );
}

export default SearchPlanets;