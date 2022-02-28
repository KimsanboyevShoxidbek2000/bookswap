import React,{useState} from 'react';
import './KitobJoylash.css';
import {Link} from "react-router-dom";
import {data} from "../Data/Data";
import {VscSearch ,VscThreeBars } from 'react-icons/vsc';
import {BsHeart, BsPerson} from 'react-icons/bs';
import {RiCloseFill} from 'react-icons/ri';
import './KitobJoylash.css';
import Button from "../../components/Button/Button";
import {bookData} from "../../BookData/BookData";
import Footer from "../../components/Footer/Footer";

const KitobJoylash = () => {
    const [show , setShow] = useState(false)
    const [search , setSearch] = useState(false)
    return (
        <>
            {/*Navbar section start*/}
            <div className='navbar2'>
                <div className="brand">
                    <Link to='/'><img src={data.brandImg} alt="brand"/><span>BookSwap</span></Link>
                </div>
                <ul id='nav' className = {show? 'show-menu' : ''}>
                    <span onClick={() => {  setShow(!show)}}><RiCloseFill/></span>
                      <input type="search" placeholder='Qidirish' />
                    <li onClick={() => {  setShow(!show)}}>
                        <Link to='/'>Bosh sahifa</Link>
                    </li>
                    <li onClick={() => { setShow(!show)}}>
                        <Link to='/elonlaroynasi'>E'lonlar oynasi</Link>
                    </li>
                    <li onClick={() => {  setShow(!show)}}>
                        <Link to='/MeningElonlarim'>Mening e'lonlarim</Link>
                    </li>
                    <li onClick={() => {  setShow(!show)}}>
                        <Link to='/kitobjoylash'>Kitob joylash</Link>
                    </li>
                </ul>
                <div className="icon">
                    <li className='search' ><span onClick={() => setSearch(!search)}><VscSearch/></span><input className={search ? 'search-show' : ''} type='search' placeholder='Qidirish'/> </li>
                    <li className='heart'> <Link to={'/heart'}><BsHeart/></Link></li>
                    <li className='person'><Link to={'/kitobmalumotlar'}><BsPerson/></Link></li>
                    <li className='bars' onClick={() => {
                        setShow(!show)
                    }}><VscThreeBars/></li>

                </div>
            </div>
            {/*Navbar section end*/}
            <div className={'KitobJoylash container-fluid'}>
                <div className="row">
                    <div className="col-12 KitobJoylash-header">
                        <h1>Kitob joylash</h1>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12 KitobJoylash-left">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                  <div className="card">
                                      <div className="bookImg">
                                          <img src={data.Camera} alt="error"/>
                                          <div></div>
                                          <h4 className={'word'}>
                                              Rasm joylash
                                          </h4>
                                      </div>
                                  </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12 Card2">
                                  <div className="card2">
                                      <input type="text" placeholder={'Kitob nomi'}/>
                                      <input type="text" placeholder={'Kitob avtori'}/>
                                      <input type="text" placeholder={'Kitob janri'}/>
                                      <textarea placeholder={'Kitob haqida:'}>
                                      </textarea>
                                  </div>
                                <Button BtnLink={''} BtnTitle={'Qabul qilish'}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 KitobJoylash-right">
                      <div className="card3">
                         <h1>Foydalanuvchi</h1>
                         <div className="avatar">
                             <div className="avatar-header">
                                 <img src={data.Avatar} alt="Avatar"/>
                                 <div className="avatar-name">
                                     <h1>Jorj Washington</h1>
                                     <span>Aktiv</span>
                                 </div>
                             </div>
                             <div className="avatar-body">
                                 <h2>Foydalanuvchi:</h2> <span>@jorjy</span>
                                 <h2>Joylashuvi:</h2> <span>Andijon shaxar</span>
                                 <h2>Telefon raqami: +998 90 147 87 71 </h2>
                             </div>
                         </div>
                         <Button BtnTitle={'Akkaunt'} BtnLink={'/account'}/>
                     </div>
                    </div>
                    <div className="KitobJoylash-header col-12 p-0">
                        <h1>E'lonlarim:</h1> <Link to={''}>barchasini ko'rish</Link>
                    </div>
                        {
                            bookData.slice(0, 10).map((BookItem) => {
                                return(
                                    <div className={'Card col-6 col-lg-3 col-md-4 col-sm-6'}>
                                        <div className="card">
                                            <div className="Card-header">
                                                <img className='Card-img' src={BookItem.img} alt="error"/>
                                            </div>
                                            <h3 className={'book-information'}>
                                                Nomi: <span>{BookItem.bookName}</span><br/>
                                                Avtori: <span>{BookItem.bookAvtori}</span> <br/>
                                                Janri: <span>{BookItem.Janri}</span>
                                            </h3>
                                            <p className='book-time' >{BookItem.bookHudud}-{BookItem.day} 18:20</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default KitobJoylash;