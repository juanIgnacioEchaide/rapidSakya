import React from 'react'
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

