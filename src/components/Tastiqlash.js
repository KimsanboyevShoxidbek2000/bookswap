import React from 'react';
import {Link} from "react-router-dom";
import Button from "./Button/Button";
import {RiCloseFill} from 'react-icons/ri';
import {BsPerson} from 'react-icons/bs';
import '../App.css';
import {data} from "../pages/Data/Data";
const Tastiqlash = () => {
    return(
        <div className={'app'}>
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
                        <div className='close'><Link to='/kirish'><RiCloseFill/></Link></div>
                        <h1>
                            Tastiqlash
                        </h1>
                        <div className="inputs">
                            <input type="text" placeholder='Telefon raqam' />
                            <p className='raqam'>Telefon raqamni kiriting</p>
                        </div>
                        <Button BtnTitle={'Davom etish'} BtnLink={'/tastiqlashparol'}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Tastiqlash;