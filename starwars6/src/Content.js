import React from 'react';
import './content.css';

const Content = ({content,detail}) => {
    return (
        <div className = "div-details">
            <h2>{ (detail.data.name || detail.data.title).toUpperCase()}</h2>
            <ul>
            {
                content.map((element, index) => {
                    return (
                        <li key = {index} className = "li-details"><span className = "span-details">{element}</span> : { detail.data[element]}</li>
                    )
                })
                }
                </ul>
        </div>
    )
}

export default Content;