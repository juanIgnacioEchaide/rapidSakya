import React from 'react'
import NavBar from '../navbar/index';
import PropTypes from 'prop-types'

const layout = ({children}) => {
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    )
}

layout.propTypes = {

}

export default layout

