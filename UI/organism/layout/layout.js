import React from 'react'
import NavBar from '../navbar/index';
import PropTypes from 'prop-types';
import LoginModal from '../../organism/loginModal/loginModal';

const layout = ({children}) => {
    const loginSelected = false;
    
    return (
        <div>
            <NavBar/>

            {children}

            {loginSelected 
            ? <LoginModal/>
            :null}
        </div>
    )
}

layout.propTypes = {

}

export default layout

