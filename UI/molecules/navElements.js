import styles from '../../styles/Navbar.module.css';
import Link from 'next/link';

export default function NavElements(){

    const NavContainer = ({children}) => { 
        return (<div className={styles.container}>
                    {children}
                </div>); 
        };
     
    const NavLinks = ({links}) => { 
        return (<div className={styles.links_list}>
                  {links.map( l => <p className={styles.links_item}>{l.title}</p>)}
                </div>); 
        };

    const NavLogo = ({img}) => { 
        return (<img className={styles.logo} src={img}/>); 
        };

    const NavUser = ({img, loginFunc}) => { 
        return (<img  className={styles.login_button} src={img} onClick={loginFunc}/>); 
        };

    const NavBurger = ({openFunc}) => { 

        return (<div className={styles.burger} onClick={openFunc}>

                </div>); 
        };

    const NavMenu = ({isOpen}) => {
        return (
            <div className={styles.drop_menu_list}>
                {links.map( l => <p  className={styles.drop_menu_item}>{l.title}</p>)}
            </div>
        )  
    }

        return { NavContainer, NavLinks, NavLogo, NavUser, NavBurger}

}