import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import { data } from '../Data/Data';
import {VscSearch ,VscThreeBars } from 'react-icons/vsc';
import {BsHeart, BsPerson} from 'react-icons/bs';
import { bookData } from '../../BookData/BookData';
import {RiCloseFill} from 'react-icons/ri';
import './KitobMalumotlar.css';
import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
const KitobMalumotlar = () => {
    const [show , setShow] = useState(false)
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
                    <li onClick={() => {  setShow(!show)}}>
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
                    <li className='search' ><VscSearch/></li>
                    <li className='heart'> <Link to={'/heart'}><BsHeart/></Link></li>
                    <li className='person'><Link to={'/account'}><BsPerson/></Link></li>
                    <li className='bars' onClick={() => {
                        setShow(!show)
                    }}><VscThreeBars/></li>

                </div>
            </div>
     {/*Navbar section end*/}
     <div className="KitobMalumotlar">
         <div className="row">
             <div className="col-12 KitobMalumotlar-header">
                 <h1>Kitob ma'lumotlari</h1>
             </div>
             <div className="KitobMalumotlar-body col-12">
                 <div className="row">
                     <div className="col-lg-8 col-md-10  col-12 KitobMalumotlar-body-left">
                            <div className="card">
                                <div className="card-left">
                                        <img src={data.CardImg2} alt="error" />
                                </div>
                                <div className="card-right">
                                    <h2>Nomi: <span> Billion dollar whale</span></h2>
                                    <h2>Avtori: <span> Tom Wright Bradley Hope</span></h2>
                                    <h2>Janri: <span> Biznez, moliya, </span></h2>
                                    <h2>Kitob haqida: <br />
                                        <span>
                                         The man who fooled  Wall Street,
                                         HOLLYWOOD, and the World. The inside the story
                                         oh the JHO LOW and the 1MDB scandal.
                                        </span>
                                    </h2>
                                </div>
                            </div>
                     </div>
                     <div className="col-lg-4 col-md-6 offset-md-13 col-12 KitobMalumotlar-body-right">
                            <div className="card">
                              <h1>Foydalanuvchi</h1>
                              <div className="avatar">
                                 <img src={data.Avatar} alt="error" />
                                 <div className="text">
                                     <h3>Jorj Washington</h3>
                                     <p>So‘nggi aktivlik: 15:02</p>
                                 </div>
                              </div>
                              <div className="text-information">
                                  <h2>Foydalanuvchi:<span> @jorjy</span></h2>                                
                                  <h2>Joylashuvi:<span> Andijon shahri</span></h2>                                
                                  <h2>Telefon raqami: <p>+998 xx xxx xx xx</p></h2>                                
                              </div>
                              <Button BtnLink={''} BtnTitle={'Raqamni ko\'rish'}/>
                             </div>
                     </div>
                 </div>
             </div>
             <div className="col-12 KitobMalumotlar-header">
                 <h1>Avtorning barcha e'lonlari: <Link to={''}>barchasini ko'rish</Link></h1>
             </div>
             {
                bookData.slice(0, 4).map((BookItem) => {
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
             <div className="col-12 KitobMalumotlar-header">
                 <h1>O'xshash e'lonlar: <Link to={''}>barchasini ko'rish</Link></h1>
             </div>
             {
                bookData.slice(2, 6).map((BookItem) => {
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
  )
}

export default KitobMalumotlar