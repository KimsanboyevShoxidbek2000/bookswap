import React,{useState} from 'react';
import {Link} from 'react-router-dom'
import { data } from '../Data/Data';
import {VscSearch ,VscThreeBars } from 'react-icons/vsc';
import {BsHeart, BsPerson} from 'react-icons/bs';
import { bookData } from '../../BookData/BookData';
import {AiTwotoneHeart} from 'react-icons/ai'
import {RiCloseFill} from 'react-icons/ri';
import './Heart.css';
import Footer from '../../components/Footer/Footer';
const Heart = () => {
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
                <li className='search' ><span onClick={() => setSearch(!search)}><VscSearch/></span><input className={search ? 'search-show' : ''} type='search' placeholder='Qidirish'/> </li>
                    <li className='heart'> <Link to={'/heart'}><BsHeart/></Link></li>
                    <li className='person'><Link to={'/account'}><BsPerson/></Link></li>
                    <li className='bars' onClick={() => {
                        setShow(!show)
                    }}><VscThreeBars/></li>

                </div>
       </div>
       {/*Navbar section end*/}
        <div className="Heart">
            <div className="row">
              <div className="col-12 Heart-header">
                  <h1>Sevimli  kitoblarim</h1>
              </div>
              {
                  bookData.slice(0, 4).map((BookItem) => {
                      return(
                          <div className={'Card col-6 col-lg-3 col-md-4 col-sm-6'}>
                              <div className="card">
                                <div className="heart"><AiTwotoneHeart/></div>
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

export default Heart;