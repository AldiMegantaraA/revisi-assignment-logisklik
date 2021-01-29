import React, {useState} from 'react'
import { HeroBg, ImageBg, ForgotPasswordContainer } from './ForgotPassComponents'
import Img from '../../assets/backgroud.svg'
import Header from '../../components/header/header.component'

import './forgot-password.styles.scss'
import LupaPassword from '../../components/lupa-password/lupa-password.component'
import Sidebar from '../../components/sidebar/sidebar.component'

const ForgotPassword = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <> 
            <ForgotPasswordContainer>
                <HeroBg>
                    <ImageBg src={Img} className='bg'/>
                </HeroBg>
                <Sidebar isOpen={isOpen} toggle={toggle}/>
                <Header toggle={toggle}/>
                <LupaPassword />
            </ForgotPasswordContainer>
        </>
    )
}

export default ForgotPassword;
