import NavElements from '../../molecules/navElements';
import useNavabar from '../../../utils/useNavbar';

const NavBar = ({size}) => {   
    const { NavContainer, NavLinks, NavLogo, NavUser, NavMenu, NavBurger } = NavElements();
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