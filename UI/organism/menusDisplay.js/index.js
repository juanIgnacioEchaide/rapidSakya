
import { useQuery, gql } from '@apollo/client'
import { MENUS } from '../../../server/queries'

const MenusDisplay = () =>{
/* 
    const { loading, error, data } = useQuery(SINGLE_MENU);   */

    if (loading) 
      return <p>Loading...</p>;
    if (error) 
      return <p>Error :{error}</p>;
      
    return (<div>
 
    </div>)
}