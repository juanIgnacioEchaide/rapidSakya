import Cards from '../../atoms/cards'
import { useMutation, gql } from '@apollo/client'
import { ADD_ORDER } from '../../../server/queries'


const Purchase = () =>{
    const [ selectedProducts , setSelectedProducts  ] = useState( { price: 0, products: [] } );

    const [ addOrder, { data }] = useMutation( ADD_ORDER );

    const handleSelectProduct = () =>{

        return setSelectedProducts()
    }

    const onSubmitOrder = (e) => {
        e.preventDefault();
        addOrder({ variables: {
                    price: selectedProducts.price,
                    products: selectedProducts.products}});
        setSelectedProducts({ price: 0, products: [] });
    }

    const { FocusCard } = Cards();
    const [addOrder] = useMutation(ADD_ORDER);  

    return (<FocusCard>
        

        <button 
        onClick={ e => onSubmitOrder(e) }>
            LISTO
        </button>

    </FocusCard>)}
export default Purchase;