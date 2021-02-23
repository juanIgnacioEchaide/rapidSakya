import React from 'react'
import PropTypes from 'prop-types'
import { query } from 'express'
import { getMenusQuery, getMenuByIdQuery, getPromosQuery, getPromoByIdQuery } from '../server/queries'
import { setWith } from 'lodash'

export default function useQuery({queryType, id }) {
    switch(queryType){
        case 'getMenus' : return getMenusQuery ;
        break;
        case 'getMenuById' : return getMenuByIdQuery(id) ;
        break;
        case 'getPromos' : return getPromosQuery;
        break;
        case 'getPromoById' : return getPromoByIdQuery(id);
        break;
        default: getPromosQuery;
    }    
}





