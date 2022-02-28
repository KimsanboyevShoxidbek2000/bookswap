import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import {data} from "../../pages/Data/Data";
import {VscSearch} from 'react-icons/vsc'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="row">
                <div className="col-lg-3 col-12 col-md-6">
                    <div className="brand">
                        <img src={data.brandImg} alt="brand_img"/>
                        <span>BookSwap</span>
                    </div>
                    <br/>
                    <p className='text'>
                        Kitobingiz sizga foyda <br/>
                        keltirishini hohlasangiz, <br/>
                        uni boshqalar bilan bo‘lishing !
                    </p>
                </div>
                <div className="col-lg-3 col-12 col-md-6">
                     <li>
                         <Link to={''}>Bosh sahifa</Link>
                     </li>
                    <li>
                        <Link to={''}>E'lonlarim</Link>
                    </li>
                    <li>
                        <Link to={''}>Mening e'lonlarim</Link>
                    </li>
                    <li>
                        <Link to={''}>Kitob joylash</Link>
                    </li>
                </div>
                <div className="col-lg-3 col-12 col-md-6">
                    <li><Link to={''}>Kitob joylash haqida ma'lumot</Link></li>
                    <li><Link to={''}>Account ochish haqida ma'lumot</Link></li>
                    <li><Link to={''}>Ma'lumotlar</Link></li>
                </div>
                <div className="col-lg-3 col-12 col-md-6">
                    <div className="search">
                        <VscSearch/>
                        <input type="search"placeholder={`Qidiruv bo'limi`}/>
                    </div>
                </div>
                <div className="col-12 FooterBottom">
                   <div>
                       <span>
                        &copy;BookSwap2022
                   </span>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;