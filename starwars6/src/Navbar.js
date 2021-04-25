import React, { useState } from 'react';
// import List from './List';
import './navbar.css'
import { NavLink } from 'react-router-dom';

const top = ['films','species','planets','people','starships','vehicles']

const Navbar = ({ name }) => {
    const [select, setSelect] = useState(name.params.id);

    const handleClick = (e) => {
        setSelect(e.target.innerText.toLowerCase());
    }
    
    return (
        <div>
        <div className="navbar">
                <ul className = "nav-ul">
                {top.map((data,id)=> {
                    return (data === select ? 
                        <li key={id} className="nav-list selected"> {data.toUpperCase()}</li> :
                        <NavLink to={`/${data}`} key={id} className="nav-links"><li className="nav-list" onClick={handleClick}> {data.toUpperCase()}</li></NavLink>)
                })}
                </ul>
            </div>
            {/* <List info={name}/> */}
        </div>
    )

}

export default Navbar;