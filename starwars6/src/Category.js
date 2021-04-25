import React from 'react';
import Icon from './Icon';
import Data from './images/Sdata';
import './Category.css';
import {Link} from "react-router-dom";

function Category() {
  

  
    return (
      <div className="category">

        {Data.map((data,index)=>{
          return (
            <Link to={`/${data.name.toLowerCase()}`}  style={{ textDecoration: 'none' }}>
              <Icon key={index} info={data}/>
            </Link>
          )
        })}
      
      </div>
    );
  }
  
  export default Category;