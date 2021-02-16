import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import {MOBILE_SIZE, DESKTOP_SIZE} from '../utils/constants';

export default function useMedia(props) {    
    let size = null;
    const setSizeType = () => {

        let sizeType = null; 

        if(window.innerWidth >= 676){
            
           sizeType = DESKTOP_SIZE;
        }
        else{
            sizeType = MOBILE_SIZE;
        }
        return sizeType;
    } 

    useEffect( 
        ()=>{
            window.addEventListener('resize',setSizeType);
            size = setSizeType();
        ()=> 
            window.removeEventListener('resize',setSizeType)
            }
        ,[]);

    return size;
}
