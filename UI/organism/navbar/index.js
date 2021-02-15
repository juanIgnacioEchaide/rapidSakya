import { useState } from 'react';
import Link from 'next/link';
import NavElements from '../../molecules/navElements';
import useNavabar from '../../../utils/useNavbar';

const NavBar = (/* {size} */) => {   

    const size = 'MOBILE_SIZE';

    const { NavContainer, NavbarContainer, NavLinks, NavLogo, NavUser, NavMenu, NavBurger } = NavElements();

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
        setIsOpened(!isOpened);
        console.log(isOpened)
    }
            return <NavContainer>
                        <NavbarContainer> 
                            <NavUser loginFunc={handleLogin}/>
                            <NavLogo/>

                          {size==='DESKTOP_SIZE'
                            ? <NavLinks links={links} />
                            : null}                         
     
                            {size ==='MOBILE_SIZE'
                            ?<NavBurger openFunc={handleOpenMenu}/>
                            : null}
                       </NavbarContainer>             

                           {isOpened 
                           ? <NavMenu links={links}/> 
                           : null}

                    </NavContainer>
    
}

export default NavBar;