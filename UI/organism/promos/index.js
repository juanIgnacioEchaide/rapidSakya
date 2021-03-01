import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import MenuItem from '../../molecules/menuItem'
import { useQuery, gql } from '@apollo/client'
import { MENUS } from '../../../server/queries'

const Promos = () =>{

  const { loading, error, data } = useQuery(MENUS);  

  if (loading) 
    return <p>Loading...</p>;
  if (error) 
    return <p>Error :{error}</p>;

    return( <div>
            {data.menues && data.menues.map( p => <MenuItem 
                                                    name = { p.name }
                                                    price = { p.price } 
                                                    description = { p.description }
                                                    />)}
            </div>)
}

export default Promos;