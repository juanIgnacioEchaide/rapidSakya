import React, {useState, useLayoutEffect} from 'react'
import PropTypes from 'prop-types'

export default function useViewport(props) {
    const [sizeMeasures, setSizeMeasures] = useState([0,0]);
    const size = '';

    const updateSize = () => { 
        setSize([window.innerWidth,window.innerHeight]);
    }
 /*    const setSizeType = () => {
        if(sizeMeasures)

    } */
    useLayoutEffect( 
        ()=>{
            window.addEventListener('resize',updateSize);
        ()=> 
            window.removeEventListener('resize',updateSize)
            }
        ,[]);


    return size;
}
