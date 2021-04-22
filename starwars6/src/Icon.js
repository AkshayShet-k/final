import React from 'react';
import './Category.css';
import {useState} from 'react';

function Icon({info}) {
    const {name,src1,src2}=info;
    const [isHov,setIsHov]=useState(false)
    
    const mouseOver=(e)=>{
        setIsHov(true);
      }

    const mouseOut=(e)=>{
        setIsHov(false) ;
      }

    return (
      <div className="">
          <img onMouseOver={mouseOver} onMouseOut={mouseOut} src={isHov?src2:src1} className="icon"></img>
          <p className='icon_name'>{name}</p>
      </div>
    );
  }
  
  export default Icon;