import React from 'react'
import NavBar from '../navbar/index';
import PropTypes from 'prop-types';
import LoginModal from '../../organism/loginModal/index';
import useMedia from '../../../utils/useMedia';

const layout = ({children}) => {
    const size = useMedia();
    
    const loginSelected = false;
    
    return (
        <div>
            <NavBar size={size}/>

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

