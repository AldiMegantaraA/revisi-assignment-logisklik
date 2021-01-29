import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ReactComponent as Logo } from '../../assets/logisklik.svg';
import Eng from '../../assets/engl.svg';
import Indo from '../../assets/indo.svg';

import './header.styles.scss';

const Header = ({toggle}) => {
    return (
        <div className='header'>
            <div className='header-container'>
                <Link className="logo-container" to="/">
                    <Logo className="logo" />
                </Link>
                <div className='mobile-icon' onClick={toggle}>
                    <FaBars />
                </div>
                <div className='options'>
                    <Link className='option' to='/'>
                        Beranda
                    </Link>
                    <Link className='option' to='/'>
                        Mitra
                    </Link>
                    <Link className='option' to='/'>
                        Cek Harga
                    </Link>
                </div>
                <div className='header-kanan'>
                    <div className='pilihan-bahasa'>
                        <div className='bahasa'>
                            <img src={Indo} alt="" className='indflag'/>
                            <Link className='indonesia'>
                                INA
                            </Link>
                        </div>
                        <div className='bahasa'>
                            <img src={Eng} alt="" className='engflag'/>
                            <Link className='english'>
                                ENG
                            </Link>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button type="submit" className='tombol1'> Daftar </button>
                        <button className='tombol2'>  Masuk </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;