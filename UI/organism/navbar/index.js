import { useState, useEffect } from 'react';
import Link from 'next/link';
import NavElements from '../../molecules/navElements';
import useNavabar from '../../../utils/useNavbar';
import {MOBILE_SIZE, DESKTOP_SIZE} from '../../../utils/constants';

const NavBar = ({size}) => {   

    const { NavContainer, NavbarContainer, NavLinks, NavLogo, NavUser, NavMenu, NavBurger } = NavElements();
    useEffect(() => {
        DESKTOP_SIZE 
        ? setIsOpened(false)
        : isOpened;
    }, [size]);

    const links =[
                {title: "Tu pedido",ref:"pedido"},
                {title: "Nuestros productos",ref:"productos"},
                {title: "¿Quiénes somos?",ref:"nosotros"},
                ]
                
    const [isOpened, setIsOpened]=useState(false);

    const handleLogin = () => {
        return console.log('login');
    }

    const handleOpenMenu=()=>{ 
        MOBILE_SIZE 
        ? setIsOpened(!isOpened)
        : setIsOpened(false);
        console.log(isOpened)
    }
            return <NavContainer>
                        <NavbarContainer> 
                            <NavUser loginFunc={handleLogin}/>
                            <NavLogo/>
                            {size === DESKTOP_SIZE && <NavLinks links={links} />}                           
                            {size === MOBILE_SIZE && <NavBurger openFunc={handleOpenMenu}/>}                        
                            </NavbarContainer>             
                            {isOpened && <NavMenu links={links}/>}
                    </NavContainer>   
}

export default NavBar;