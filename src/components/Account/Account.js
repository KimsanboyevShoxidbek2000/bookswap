import React, {useState}from 'react';
import {Link} from "react-router-dom";
import {data} from "../../pages/Data/Data";
import {BsPerson , BsHeart} from 'react-icons/bs';
import {VscSearch , VscThreeBars}from 'react-icons/vsc'
import Button from "../Button/Button";
import Avatar from  '../../images/avatar.png';
import '../../App.css';
import './Account.css';

const Account = () => {
    const [search , setSearch] = useState(false)
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
                        <Link to='/MeningElonlarim'>Mening e'lonlarim</Link>
                    </li>
                    <li>
                        <Link to='/kitobjoylash'>Kitob joylash</Link>
                    </li>
                </ul>
               <div className="icon">
               <li className='search' ><span onClick={() => setSearch(!search)}><VscSearch/></span><input className={search ? 'search-show' : ''} type='search' placeholder='Qidirish'/> </li>
                   <li className='heart'> <Link to={'/heart'}><BsHeart/></Link></li>
                   <li className='person'><Link to={'/account'}><BsPerson/></Link></li>
                   <li></li>
               </div>
            </div>
            {/*Navbar section end*/}
            <div  className='container account'>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4 ">
                        <h1>Shaxsiy ma'lumotlar</h1>
                    </div>
                    <div className="col-12  col-sm-12 col-lg-4 accountCard">

                         <div className="cardHeader">
                             <img src={Avatar} alt="avator"/>
                             <h1>
                                 Jorj Washinton
                             </h1>
                         </div>
                        <p>
                            Ism: Jorj <br/>
                            Familya : Washington <br/>
                            Foydalanuvchi: @jorjy <br/>
                            Yashash joyi: Andijon shaxar <br/>
                            Telefon raqam: +998 90 147 87 71
                        </p>
                        <Button BtnTitle={`O'zgartirish`} BtnLink={'/accountniozgartirish'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;