import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {RiCloseFill} from 'react-icons/ri'
import {FiEyeOff , FiEye} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs';
import '../../App.css';
import Button from "../Button/Button";
import {data} from "../../pages/Data/Data";

const Malumotlarim = ({}) => {
    const [type , setType] = useState(true);
    const [type1 , setType1] = useState(true);


    return (
        <div className={'app'}>
            {/*Navbar section start*/}
            <div className='navbar'>
                <div className="brand">
                    <Link to='/'><img src={data.brandImg} alt="brand"/><span>BookSwap</span></Link>
                </div>
              
                <BsPerson/>
            </div>
            {/*Navbar section end*/}
            <div className='container Malumotlarim '>
                <div className="row">
                    <div className="col-12 col-sm-12 col-lg-4">
                        <h1>
                            Ro'yxatdan o'tish
                        </h1>
                    </div>
                    <div className="col-12 col-sm-12 col-lg-4 MalumotlarimCard">
                        <div className='close'><Link to='/tastiqlashparol'><RiCloseFill/></Link></div>
                        <h1 className={'mt-2'}>
                            Ma'lumtolarim
                        </h1>
                        <div className="inputs mt-0">
                            <input type="text" placeholder={'Ism'}/>
                            <input type="text" placeholder={'Familya'}/>
                            <input type="text" placeholder={'UserName'}/>
                            <input type="number" placeholder={'Yosh'}/>
                            <select className={'input'}>
                                <option selected  value="jinsi">
                                    Jinsi
                                </option>
                                <option value="erkak">
                                    Erkak
                                </option>
                                <option value="ayol">
                                    Ayol
                                </option>
                            </select>
                            <select className={'input'}>
                                <option selected  value="andijon">
                                    Andijon
                                </option>
                                <option value="namangan">
                                    Namangan
                                </option>
                                <option value="farg'ona">
                                    Farg'ona
                                </option>
                            </select>
                            <input type={type? 'password': 'text'} placeholder='Parol'/>
                            <span className='eye1' onClick={() => {setType(!type)}}>
                            {type? <FiEyeOff/> : <FiEye/> }
                        </span>
                            <input type={type1? 'password' : 'text'} placeholder='Qayta tastiqlang'/>
                            <span className='eye2' onClick={() => {setType1(!type1)}}>
                            {type1? <FiEyeOff/> : <FiEye/> }
                        </span>
                            <Button BtnLink={'/account'} BtnTitle={'Kirish'}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );

};

export default Malumotlarim;