import { NavContainer, NavLinks, NavLogo, NavUser, NavMenu, NavBurger } from './navElements';
import useNavbar from '../../../utils/useNavbar';
import useNavabar from '../../../utils/useNavbar';

const NavBar = ({size}) => {   

    const {isOpened, handleOpenMenu} = useNavabar();

        if(size==='DESKTOP'){
            return <NavContainer>
                        <NavLogo/>
                        <NavLinks/>
                        <NavUser/>
                   </NavContainer>
               }
        else{
            return <NavContainer>
                        <NavBurger openFunc={handleOpenMenu}/>
                        {isOpened === true
                        ? <NavMenu/>
                        :null}
                   </NavContainer>
            }      
}

export default NavBar;