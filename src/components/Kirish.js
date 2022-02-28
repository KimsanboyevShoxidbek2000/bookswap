import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Button from "./Button/Button";
import {FiEyeOff , FiEye} from 'react-icons/fi'
import {RiCloseFill} from 'react-icons/ri';
import {BsPerson}from 'react-icons/bs'
import '../App.css'
import {data} from "../pages/Data/Data";
const Kirish = () => {
    const [eyes , setEyes] = useState(false);
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

            <div className='Kirish container'>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4 KirishCardStart">
                        <h1>Kirish</h1>
                    </div>
                    <div className="col-12  col-sm-12 col-lg-4  KirishCardCenter">
                        <div className='close'><Link to={'/'}><RiCloseFill/></Link></div>
                        <h1>Kirish</h1>
                        <div className="inputs">
                            <input type="text" placeholder='Username' />
                            <input type={eyes ? "text" : 'password'} placeholder='Parol' />
                            <i onClick={() => {setEyes(!eyes)}}>{ eyes? <FiEye/> : <FiEyeOff/> }</i>
                        </div>
                        <Button BtnLink={'/meningelonlarim'} BtnTitle='Kirish'/>
                        <p>Akkauntingiz yo'qmi? <Link to='/tastiqlash'>Ro'yxatdan o'ting</Link></p>
                    </div>
                </div>
            </div>
        </div>

    )
};
export default Kirish;