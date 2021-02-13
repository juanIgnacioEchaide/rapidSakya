import { useState } from 'react';
import NavElements from '../../molecules/navElements';
import useNavabar from '../../../utils/useNavbar';

const NavBar = (/* {size} */) => {   
    const size = 'MOBILE_SIZE';
    const { NavContainer, NavbarContainer, NavLinks, NavLogo, NavUser, NavMenu, NavBurger } = NavElements();
    const links =[{title: 'pagina1'},{title: 'pagina2'},{title: 'pagina3'},]
    const [isOpened, setIsOpened]=useState(false);

    const handleOpenMenu=()=>{
        setIsOpened(!isOpened);
        console.log(isOpened)
    }
            return <NavContainer>
                        <NavbarContainer>
                            <NavLogo/>
                            {size==='DESKTOP_SIZE'
                            ? <NavLinks links={links} />
                            : null}                          
                            <NavUser/>

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