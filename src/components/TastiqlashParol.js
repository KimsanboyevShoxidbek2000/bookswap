import React from 'react';
import {Link} from "react-router-dom";
import Button from "./Button/Button";
import {RiCloseFill} from 'react-icons/ri';
import {BsPerson} from 'react-icons/bs';
import '../App.css'
import {data} from "../pages/Data/Data";
const TastiqlashParol = () => {
  return(
    <div className={'app'}>
        {/*Navbar section start*/}
        <div className='navbar'>
            <div className="brand">
                <Link to='/'><img src={data.brandImg} alt="brand"/><span>BookSwap</span></Link>
            </div>
            <BsPerson/>
        </div>
        {/*Navbar section end*/}
        <div  className='container Tastiqlash'>
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-4 ">
                    <h1>Tastiqlash</h1>
                </div>
                <div className="col-12  col-sm-12 col-lg-4 TastiqlashCard">
                    <div className='close'><Link to='/tastiqlash'><RiCloseFill/></Link></div>
                    <h1>
                        Tastiqlash
                    </h1>
                    <div className="inputs">
                        <input type="text" placeholder='Parolni kiriting' />
                        <p className='raqam'>Telefon raqamizga kelgan parolni kiriting </p>
                    </div>
                    <Button BtnTitle={'Tastiqlash'} BtnLink={'/malumotlar'}/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TastiqlashParol;

