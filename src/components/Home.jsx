import {React, useEffect, useState} from "react";
import { fetchAllPuppies } from "../API/FetchPuppies";
import "../App.css"

const Home = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        const getAllPuppies = async () => {
            const players = await fetchAllPuppies();
            setPlayers(players);
        }
        getAllPuppies();
    })

}