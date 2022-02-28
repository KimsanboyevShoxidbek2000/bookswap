import React from 'react';
import {Link} from "react-router-dom";
import Button from "./Button/Button";
import {RiCloseFill} from 'react-icons/ri';
import '../App.css'
const TastiqlashParol = () => {
  return(
    <div  className='container Tastiqlash'>
    <div className="row">
        <div className="col-12 col-sm-12 col-lg-4 ">
            <h1>Tastiqlash</h1>
        </div>
        <div className="col-12  col-sm-12 col-lg-4 TastiqlashCard">
            <div className='close'><Link to='/kirish'><RiCloseFill/></Link></div>
            <h1>
                Tastiqlash
            </h1>
            <div className="inputs">
                <input type="text" placeholder='Parolni kiriting' />
                <p className='raqam'>Telefon raqamizga kelgan </p>
            </div>
            <Button BtnTitle={'Tastiqlash'} BtnLink={'/malumotlar'}/>
        </div>
    </div>
</div>
  );
};

export default TastiqlashParol;

