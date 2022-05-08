import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import { Persona } from '../CharacterListPage/style';

function SearchPlanets() {

    const [filteredPlanets, setFilteredPlantes] = useState([]);

    async function loadPlanets() {
        await api.get('/planets/')
            .then((response) => {
                setFilteredPlantes(response.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadPlanets();
    }, [])

    return (
        <div>
            <h1>Planetas</h1>
            {filteredPlanets.map((item, index) => {
                return (
                    <Link to={`/searchPlanets/${index + 1}`} key={index}>
                        <Persona>{item.name}</Persona>
                    </Link>
                );
            })}
        </div>
    );
}

export default SearchPlanets;