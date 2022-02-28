import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {data} from "../../pages/Data/Data";
import {BsPerson , BsHeart} from 'react-icons/bs';
import {VscSearch}from 'react-icons/vsc'
import './ElonlarBolimi.css';
import Button from "../Button/Button";

const ElonlarBolimi = () => {
    const [search , setSearch] = useState(false)
    const [active , setActive]   = useState(false);
    const [active1 , setActive1] = useState(false);
    const [active2 , setActive2] = useState(false);
    const [active3 , setActive3] = useState(false);
    const [active4 , setActive4] = useState(false);
    const [active5 , setActive5] = useState(false);
    const [active6 , setActive6] = useState(false);
    const [active7 , setActive7] = useState(false);
    const [active8 , setActive8] = useState(false);
    const [active10 , setActive10] = useState(false);
    const [active11 , setActive11] = useState(false);
    const [active12 , setActive12] = useState(false);
    const [active13 , setActive13] = useState(false);
    const [active14 , setActive14] = useState(false);
    const [active15 , setActive15] = useState(false);
    const [active16 , setActive16] = useState(false);
    const [active17 , setActive17] = useState(false);
    const [active18 , setActive18] = useState(false);
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
                <li className='search' ><span onClick={() => setSearch(!search)}><VscSearch/></span><input className={search ? 'search-show' : ''} type='search' placeholder='Qidirish'/> </li>
                <li className='heart'> <Link to={'/heart'}><BsHeart/></Link></li>
                <li className='person'><Link to={'/account'}><BsPerson/></Link></li>
                </div>
            </div>
            {/*Navbar section end*/}

        {/*Elonlar section start*/}
            <div className="container elonlar" >
                <div className="row w-100">
                    <div className="col-12 elonlar-top">
                        <h1>E'lonlar bo'limi</h1>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                        <div className='elonlar-left'>
                           <h1>Sizda qanday janrdagi <br/> kitoblar bor?</h1> <br/>
                            <div className="buttons">
                                <div className="Cards">
                                    <div className="card">
                                        <button
                                            onClick={() => setActive(!active)}
                                            className = {active ? 'active' : ''}>  Matematika
                                        </button>
                                    </div> <div className="card">
                                        <button
                                            onClick={() => setActive1(!active1)}
                                            className = {active1 ? 'active' : ''}>  Tarixiy
                                        </button>
                                    </div> <div className="card">
                                        <button
                                            onClick={() => setActive2(!active2)}
                                            className = {active2 ? 'active' : ''}>  Moliya
                                        </button>
                                    </div> <div className="card">
                                        <button
                                            onClick={() => setActive3(!active3)}
                                            className = {active3 ? 'active' : ''}>  Detektiv
                                        </button>
                                    </div>
                                    <div className="card">
                                        <button
                                            onClick={() => setActive4(!active4)}
                                            className = {active4 ? 'active' : ''}>  Komedik
                                        </button>
                                    </div>
                                    <div className="card">
                                        <button
                                            onClick={() => setActive5(!active5)}
                                            className = {active5 ? 'active' : ''}>  Fojiaviy
                                        </button>
                                    </div>
                                    <div className="card">
                                        <button
                                            onClick={() => setActive6(!active6)}
                                            className = {active6 ? 'active' : ''}>  Psixologik
                                        </button>
                                    </div>
                                    <div className="card">
                                        <button
                                            onClick={() => setActive7(!active7)}
                                            className = {active7 ? 'active' : ''}>  Romatik
                                        </button>
                                    </div>
                                    <div className="card">
                                        <button
                                            onClick={() => setActive8(!active8)}
                                            className = {active8 ? 'active' : ''}>  Avtobiografiya
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-8 col-lg-6">
                        <div className='elonlar-right'>
                            <h1>Sizda qanday janrdagi <br/> kitoblarga qiziqasiz?</h1> <br/>
                            <div className="buttons">
                                <div className="Cards">
                                    <div className="card">
                                        <button
                                            onClick={() => setActive10(!active10)}
                                            className = {active10 ? 'active' : ''}>  Matematika
                                        </button>
                                    </div> <div className="card">
                                    <button
                                        onClick={() => setActive11(!active11)}
                                        className = {active11 ? 'active' : ''}>  Tarixiy
                                    </button>
                                </div> <div className="card">
                                    <button
                                        onClick={() => setActive12(!active12)}
                                        className = {active12 ? 'active' : ''}>  Moliya
                                    </button>
                                </div> <div className="card">
                                    <button
                                        onClick={() => setActive13(!active13)}
                                        className = {active13 ? 'active' : ''}>  Detektiv
                                    </button>
                                </div>
                                    <div className="card">
                                        <button
                                            onClick={() => setActive14(!active14)}
                                            className = {active14 ? 'active' : ''}>  Komedik
                                        </button>
                                    </div>
                                    <div className="card">
                                        <button
                                            onClick={() => setActive15(!active15)}
                                            className = {active15 ? 'active' : ''}>  Fojiaviy
                                        </button>
                                    </div>
                                    <div className="card">
                                        <button
                                            onClick={() => setActive16(!active16)}
                                            className = {active16 ? 'active' : ''}>  Psixologik
                                        </button>
                                    </div>
                                    <div className="card">
                                        <button
                                            onClick={() => setActive17(!active17)}
                                            className = {active17 ? 'active' : ''}>  Romatik
                                        </button>
                                    </div>
                                    <div className="card">
                                        <button
                                            onClick={() => setActive18(!active18)}
                                            className = {active18 ? 'active' : ''}>  Avtobiografiya
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Button BtnLink={'/elonlaroynasi'} BtnTitle={"E'lonlar oynasi"}/>
            </div>
        {/*Elonlar section end*/}
        </div>
    );
};
export default ElonlarBolimi;