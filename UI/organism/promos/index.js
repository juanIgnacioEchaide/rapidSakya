import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import MenuItem from '../../molecules/menuItem'

const Promos = ({promos}) =>{

    return( <div>
            {promos && promos.map( p => <MenuItem 
                                name={p.name} 
                                price={p.price}
                                description={p.description}
                            /*     img={p.img}
                                link={p.link} */
                                />)}
            </div>)
}

export default Promos;