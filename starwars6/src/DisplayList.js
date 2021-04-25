import React from 'react';
import './displist.css'
import { NavLink } from 'react-router-dom';

const DisplayList = ({id,list}) => {
    return (
        <div className="div-column">
            <ul className = "ul-column">
            {
                    list.map((li) => {
                        let index = li.url.match(/[0-9]+/);
                        return ( <NavLink to = {`/${id}/${index}`} className = "nav-links">
                            <li key={index} className="list-column">{li.name || li.title}</li></NavLink>)
                })
                }
            </ul>
        </div>
    )
}

export default DisplayList;