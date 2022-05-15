import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import { Persona } from '../CharacterListPage/style';
import {Container, Title, Button, Input} from "./style";

function SearchLocals() {

    const [filteredLocals, setFilteredLocals] = useState([]);
    const [searchValue, setSeearchValue] = useState('');

    async function loadLocals() {
        await api.get('/places')
            .then((response) => {
                console.log(response.data.data);
                setFilteredLocals(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    async function filterloadLocals() {
        await api.get(`/places?name=${searchValue}`)
            .then((response) => {
                console.log(response.data.data);
                setFilteredLocals(response.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        loadLocals();
    }, [])

    useEffect(() => {
        if (searchValue === '') {
            loadLocals();
        } else {
            filterloadLocals();
        }
    }, [searchValue])

    return (
        <Container>
            <Link to="/" >
                <Button name="myButton" >Voltar</Button>
            </Link>
            <Input value={searchValue} onChange={event => setSeearchValue(event.target.value)} />
            <Title>Locais</Title>
            {filteredLocals.map((item, index) => {
                return (
                    <Link to={`/searchLocals/${item.id}`} key={index}>
                        <Persona>{item.name}</Persona>
                    </Link>
                );
            })}
        </Container>
    );
}

export default SearchLocals;