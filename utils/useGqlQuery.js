import React from 'react'
import PropTypes from 'prop-types'
import { useQuery, gql } from '@apollo/client';


export default function useGqlQuery(query, params) {

  const { loading, error, data } = useQuery(PROMOS); 

  if(loading){
     console.log('loading');
     return <div> loading...</div>
  }
  if(error){
      console.log(error);
      return <div> error!</div>
  }

  console.log(data);
    return { data }
}


