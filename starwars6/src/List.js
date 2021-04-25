
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './List.css';
import DisplayList from './DisplayList';
import Buttons from './Buttons';


const List = ({ info }) => {
    const { id } = info.params

    const [list, setList] = useState([]);
    const [curId, setCurId] = useState(id);
    const [presUrl, setPresUrl] = useState(`https://swapi.dev/api/${id}/?page=1`);
    const [prevUrl, setPrevUrl] = useState();
    const [nextUrl, setNextUrl] = useState();

    useEffect(() => {
        getData();
    }, [id, presUrl])
    
    const handleNext = () => {
        setPresUrl(nextUrl)
    }

    const handlePrev = () => {
        setPresUrl (prevUrl)
    }
    

    const getData = async () => {
        return(await axios.get(presUrl)
            .then(res => {
                setList(res.data.results);
                setNextUrl(res.data.next);
                setPrevUrl(res.data.previous);
                id === curId ? console.log() : setPresUrl(`https://swapi.dev/api/${id}/?page=1`);
                setCurId(id);
            })
        )}

    return (
        <div>
            <DisplayList id={id} list={list} />
            <div className = "buttons">
            {
                prevUrl ? <Buttons click= {handlePrev} content = "PREVIOUS" cName = "left"/> : null
            }
            {
                nextUrl ? <Buttons click={handleNext} content= "NEXT" cName = "right"/> : null
            }
            </div>
        </div>
    )
}

export default List;