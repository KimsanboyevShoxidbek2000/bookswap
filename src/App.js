import React  from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import MeningElonlarim from "./pages/MeningElonlarim/MeningElonlarim";
import Kirish from "./components/Kirish";
import Tastiqlash from "./components/Tastiqlash";
import Malumotlarim from "./components/Ma'lumtlarim/Malumotlarim";
import {BsPerson} from 'react-icons/bs'
import './App.css';
import Button from "./components/Button/Button";
import HeroImgLeft from "./images/hero-left-img.png";
import HeroImgRight from "./images/hero-right-img.png";
import TastiqlashParol from './components/TastiqlashParol';
import {data} from "./pages/Data/Data";
import Account from "./components/Account/Account";
import AccountniOzgartirish from "./components/AccountniOzgartirish/AccountniOzgartirish";
import ElonlarBolimi from "./components/ElonlarBolimi/ElonlarBolimi";
import Heart from "./pages/Heart/Heart";
import KitobJoylash from "./pages/KitobJoylash/KitobJoylash";
import ElonlarOynasi from './pages/ElonlarOynasi/ElonlarOynasi';
import KitobMalumotlar from './pages/KitobMalumotlar/KitobMalumotlar';
function App() {
  return (
      <div className='App'>

                  <Routes>
                        <Route path = 'elonlaroynasi' element={<ElonlarOynasi/>}/>
                        <Route path = 'elonlar' element={<ElonlarBolimi/>}/>
                        <Route path = "/" element={<Home/>}/>
                        <Route path = 'kirish' element={<Kirish/>}/>
                        <Route path = 'meningelonlarim' element={<MeningElonlarim/>}/>
                        <Route path = 'tastiqlash' element={<Tastiqlash/>} />
                        <Route path = 'malumotlar' element={<Malumotlarim/>}/>
                        <Route path = 'tastiqlashparol' element={<TastiqlashParol/>}/>
                        <Route path = 'account' element={<Account/>}/>
                        <Route path = 'accountniozgartirish' element={<AccountniOzgartirish/>}/>
                        <Route path = 'heart' element={<Heart/>}/>
                        <Route path = 'kitobjoylash' element={<KitobJoylash/>} />
                        <Route path = 'kitobmalumotlar' element={<KitobMalumotlar/>}/>
                  </Routes>
      </div>
  );

}
export  default  App;

const Home = () => {
    return(
        <div className={'app'}>
            {/*Navbar section start*/}
            <div className='navbar'>
                <div className="brand">
                    <Link to='/'><img src={data.brandImg} alt="brand"/><span>BookSwap</span></Link>
                </div>
               <div className="icon">
               <Link to={'/account'}><BsPerson/></Link>
               </div>
            </div>
            {/*Navbar section end*/}
            <div className="container hero" >
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                        <div className='hero-left'>
                            <div className="row p-0 m-0">
                                <div className="col-md-6 col-8 col-sm-6 col-lg-6 p-1">
                                    <h1>E'lon berish</h1> <br />
                                    <p >
                                        Siz bu sayt orqali o’zingizda
                                        bor kitobni manfaatli ravishda
                                        siz qidirgan yoki o‘zingizga yoqqan
                                        kitobga alishtirishingiz mumkin.
                                        <br /> <br />
                                        Ro‘yxatdan o‘ting va ozingizdagi
                                        kitoblarni akkauntingizga joylang
                                    </p>
                                    <Button BtnTitle={"E'lon berish"} BtnLink={'kirish'}/>
                                </div>
                                <div className="col-4 col-md-6 col-sm-6 col-lg-6 p-0">
                                    <img src={HeroImgLeft} alt="Error" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                        <div className='hero-right'>
                            <div className="row p-0 m-0">
                                <div className="col-8 col-md-6 col-sm-6 col-lg-6 p-1">
                                    <h1>E'lon ko'rish</h1> <br />
                                    <p >
                                        Siz bu sayt orqali o’zingizda
                                        bor kitobni manfaatli ravishda
                                        siz qidirgan yoki o‘zingizga yoqqan
                                        kitobga alishtirishingiz mumkin.
                                        <br /> <br />
                                        E’lon ko‘rish bo‘limiga <br />
                                        o‘ting va o‘zingizga  <br />
                                        yoqqan kitobni toping.
                                    </p>
                                    <Button
                                        BtnTitle={"E'lon ko'rish"}
                                        BtnLink={'elonlar'}
                                    />
                                </div>
                                <div className="col-4 col-sm-6 col-md-6 col-lg-6 p-0">
                                    <img src={HeroImgRight} alt="Error" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

