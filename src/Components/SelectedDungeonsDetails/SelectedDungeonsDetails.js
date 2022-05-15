import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Services/api";
import { Link } from "react-router-dom";

function SelectedDungeonsDetails() {
    const [planetDetails, setPlanetDetails] = useState();
    const params = useParams();
    const planetId = params.id;

    async function getPlanetDetails() {
        await api
            .get(`/places/${planetId}`)
            .then((response) => {
                console.log(response.data.data);
                setPlanetDetails(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getPlanetDetails();
    }, []);

    return (
        <div>
            <Link to="/searchDungeons" >
                <button>Voltar</button>
            </Link>
            <h1>Planeta selecionado</h1>
            {planetDetails && (
                <div>
                    <h1>Nome: {planetDetails.name === '' ? 'Não informado' : planetDetails.name}</h1>
                    <h1>Descrição: {planetDetails.description === null ? 'Não informado' : planetDetails.description}</h1>
                </div>
            )}
        </div>
    );
}

export default SelectedDungeonsDetails;