import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import MenuItem from '../../molecules/menuItem'
import { useQuery, gql } from '@apollo/client';

const PROMOS = gql`
  query getPromos{
    menues{
      id
      price
      description
      name
    }
  }
  `


const Promos = () =>{
  const { loading, error, data } = useQuery(PROMOS);  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error}</p>;



    return( <div>
            {data.menues && data.menues.map( p => <div key={p._id}>
                                                  <p>{p.name}</p>
                                                  <p>{p.price}</p>
                                                  <p>{p.description}</p>
                                                  </div>)}
            </div>)
}

export default Promos;