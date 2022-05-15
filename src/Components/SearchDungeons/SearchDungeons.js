import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import { Persona } from '../CharacterListPage/style';

function SearchDungeons() {

    const [filteredDungeons, setFilteredDungeons] = useState([]);
    const [searchValue, setSeearchValue] = useState('');

    async function loadDungeons() {
        await api.get('/places')
            .then((response) => {
                console.log(response.data.data);
                setFilteredDungeons(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    async function filterloadDungeons() {
        await api.get(`/places?name=${searchValue}`)
            .then((response) => {
                console.log(response.data.data);
                setFilteredDungeons(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadDungeons();
    }, [])

    useEffect(() => {
        if (searchValue === '') {
            loadDungeons();
        } else {
            filterloadDungeons();
        }
    }, [searchValue])

    return (
        <div>
            <Link to="/" >
                <button type="submit" name="myButton" >Voltar</button>
            </Link>
            <input value={searchValue} onChange={event => setSeearchValue(event.target.value)} />
            <h1>Dungeons</h1>
            {filteredDungeons.map((item, index) => {
                return (
                    <Link to={`/searchDungeons/${item.id}`} key={index}>
                        <Persona>{item.name}</Persona>
                    </Link>
                );
            })}
        </div>
    );
}

export default SearchDungeons;