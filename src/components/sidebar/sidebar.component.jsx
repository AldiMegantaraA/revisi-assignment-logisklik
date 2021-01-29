import React from 'react';
import './sidebar.styles.scss';
import { Link } from 'react-router-dom';
import CustomButton from '../../custom-button/custom-button.component';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink } from './SidebarElements';
import Indo from '../../assets/indo.svg'
import Eng from '../../assets/engl.svg'




const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer className='sidebar-container' isOpen={isOpen} onClick={toggle}>
                <Icon className='close-icon' onClick={toggle}>
                    <CloseIcon className='icon'/>
                </Icon>
                <SidebarWrapper className='sidebar-wrapper'>
                    <SidebarMenu className='sidebar-menu'>
                        <SidebarLink className='option' to='/'>
                            Beranda
                        </SidebarLink>
                        <SidebarLink className='option' to='/'>
                            Mitra
                        </SidebarLink>
                        <SidebarLink className='option' to='/'>
                            Cek Harga
                        </SidebarLink>
                    </SidebarMenu>
                    <div className='header-kanan'>
                        <div className='buttons'>
                            <button type="submit" className='tombol1'> Daftar </button>
                            <button className='tombol2'>  Masuk </button>
                        </div>
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
                    </div>
                </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;