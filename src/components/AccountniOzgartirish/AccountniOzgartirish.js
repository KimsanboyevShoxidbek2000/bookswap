import React from 'react';
import {Link} from "react-router-dom";
import {data} from "../../pages/Data/Data";
import Button from "../Button/Button";
import Avatar from  '../../images/avatar.png';
import {BsPerson , BsHeart} from 'react-icons/bs';
import {VscSearch}from 'react-icons/vsc'
import './AccountOzgartirish.css';
const AccountniOzgartirish = () => {
    return (
        <div className={'app'}>
            {/*Navbar section start*/}
            <div className='navbar'>
                <div className="brand">
                    <Link to='/'><img src={data.brandImg} alt="brand"/><span>BookSwap</span></Link>
                </div>
                <ul id='nav'>
                    <li>
                        <Link to='/'>Bosh sahifa</Link>
                    </li>
                    <li>
                        <Link to='/elonlaroynasi'>E'lonlar oynasi</Link>
                    </li>
                    <li>
                        <Link to='/meningelonlarim'>Mening e'lonlarim</Link>
                    </li>
                    <li>
                        <Link to='/kitobjoylash'>Kitob joylash</Link>
                    </li>
                </ul>
                <div className="icon">
                    <VscSearch/>
                    <BsHeart/>
                    <BsPerson/>
                </div>
            </div>
            {/*Navbar section end*/}
            <div className='container Malumotlarim '>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4">
                        <h1>
                            Shaxsiy ma'lumotlar
                        </h1>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4 MalumotlarimCard">
                        <div className="cardHeader">
                            <img src={Avatar} alt="avatar"/>
                            <Link to={''}>Rasimni o'zgartirish</Link>
                        </div>
                        <div className="inputs mt-0">
                            <input type="text" placeholder={'Ism'}/>
                            <input type="text" placeholder={'Familya'}/>
                            <input type="text" placeholder={'Foydalanuvchi'}/>
                            <input type="text" placeholder={'Yashash joyi'}/>
                            <input type="text" placeholder={'Telefon raqam'}/>
                            <Button BtnLink={'/account'} BtnTitle={'Qabul qilish'}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AccountniOzgartirish;