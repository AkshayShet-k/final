import React from 'react';

const Buttons = ({click,content,cName}) => {
    return (
        <div>
            <button onClick={click} className = {cName}>{content}</button>
        </div>
    )
}

export default Buttons;