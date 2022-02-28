import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css'
const Button = ({BtnTitle , BtnLink}) => {
  return (
     <div className='btn'>
        <Link to={`${BtnLink}`}>
             {BtnTitle}
        </Link>
     </div>
  )
  
};

export default Button;
