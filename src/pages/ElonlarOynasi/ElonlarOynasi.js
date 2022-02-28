import React, {useState} from 'react'
import './ElonlarOynasi.css';
import {VscSearch ,VscThreeBars } from 'react-icons/vsc';
import {BsHeart, BsPerson} from 'react-icons/bs';
import {MdLocationOn , MdMenuBook} from 'react-icons/md'
import {AiTwotoneHeart} from 'react-icons/ai'
import {RiCloseFill} from 'react-icons/ri';
import {data} from "../Data/Data";
import { bookData } from '../../BookData/BookData';
import {Link} from 'react-router-dom'
import Footer from '../../components/Footer/Footer';
const ElonlarOynasi = () => {
  const [show , setShow] = useState(false)
  return (
   <>
      {/*Navbar section start*/}
      <div className='navbar2'>
                <div className="brand">
                    <Link to='/'><img src={data.brandImg} alt="brand"/><span>BookSwap</span></Link>
                </div>
                <ul id='nav' className = {show? 'show-menu' : ''}>
                    <span  onClick={() => {  setShow(!show)}}><RiCloseFill/></span>
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
                    <li className='heart'> <Link to={'/heart'}><BsHeart/></Link></li>
                    <li className='person'><Link to={'/account'}><BsPerson/></Link></li>
                    <li className='bars' onClick={() => {
                        setShow(!show)
                    }} ><VscThreeBars/></li>

                </div>
            </div>
      {/*Navbar section end*/}
      <div className="elonlaroynasi container-fluid">
              <div className="row">
                <div className="col-12 sarlavha">
                  <h1>E'lonlar oynasi</h1>
                </div>
                <div className="col-12">
                <div className="elonlaroynasi-header">
                  <div className="row">
                    <div className= "search">
                    <VscSearch/> <input className='input' type="search" name='search' placeholder='Qidirish' />
                    </div>
                    <div className="viloyatlar">
                      <MdLocationOn/><select name="value" id="#">
                        <option value="Andijon">Andijon</option>
                        <option value="Namangan">Namangan</option>
                        <option value="Toshkent">Toshkent</option>
                      </select>
                                
                    </div>
                    <div className="janrlar">
                    <MdMenuBook/><select name="value" id="#">
                        <option value="Matematika">Matematika</option>
                        <option value="Moliya">Moliya</option>
                        <option value="Romatik">Romatik</option>
                      </select>
                    </div>
                  </div>
                </div>
                </div>
                {
                  bookData.slice(0, 10).map((BookItem) => {
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
  )
}

export default ElonlarOynasi