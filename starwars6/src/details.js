import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Content from './Content';
import Navbar from './Navbar';

const Details = ({ match }) => {
    const {id,id1} = match.params

    const [detail, setDetail] = useState();

    const content = {
        films: ['director','producer','created','edited','release_date','episode_id','opening_crawl'],
        species: ['average_height','average_lifespan','classification','created','edited','designation','eye_colors','hair_colors','language','skin_colors'],
        planets: ['climate','created','diameter','edited','gravity','orbital_period','population','rotation_period','residents','surface_water','terrain'],
        people: ['birth_year','created','edited','eye_color','gender','hair_color','height','mass','skin_color'],
        starships: ['MGLT','cargo_capacity','consumables','created','crea','edited','hyperdrive_rating','length','manufacturer','max_atmosphering_speed','model','passengers','starship_class'],
        vehicles: ['cargo_capacity','consumables','cost_in_credits','created','crew','edited','length','manufacturer','max_atmosphering_speed','model','passengers','pilots','vehicle_class']
    }

    useEffect(() => {
        getDetail();
    },[]);

    const getDetail = async () => {
        const details = await axios.get(`https://swapi.dev/api/${id}/${id1}`);
        setDetail(details);
        
    }
    console.log(detail);

    return (
        <div>
            <Navbar name = {match}/>
               {detail === undefined ? console.log() : <Content content = {content[id]} detail = {detail} />}
        </div>
    )
}

export default Details;