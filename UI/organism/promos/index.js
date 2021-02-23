import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import MenuItem from '../../molecules/menuItem'
import { PROMOS } from '../../../server/queries'
import useGqlQuery  from "../../../utils/useGqlQuery"

const Promos = (/* {promos} */) =>{

    const {promos} = useGqlQuery( PROMOS ); 

    return( <div>
            {promos && promos.map( p => <MenuItem 
                                name={p.name} 
                                price={p.price}
                                description={p.description}
                                img={p.img}
                                link={p.link}
                                />)}
            </div>)
}

export default Promos;