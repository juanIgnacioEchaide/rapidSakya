import React from 'react'
import PropTypes from 'prop-types'
import { query } from 'express'
import { getMenusQuery, getMenuByIdQuery, getPromosQuery, getPromoByIdQuery } from '../server/queries';
import {GET_MENUS, GET_MENUS_BY_ID, GET_PROMOS, GET_PROMOS_BY_ID } from '../utils/constants';
import { setWith } from 'lodash'

export default function useQuery({queryType, id }) {

    switch(queryType){
        case  GET_PROMOS : return data = getMenusQuery ;
        break;
        case GET_PROMOS_BY_ID : return data = getMenuByIdQuery(id) ;
        break;
        case GET_MENUS : return data = getPromosQuery;
        break;
        case GET_MENUS_BY_ID : return data = getPromoByIdQuery(id);
        break;
        default: data = getPromosQuery;
    }    

    if(data.loading){
        return (<div> loading...</div>)}
        else {
          return data;
      }
}





