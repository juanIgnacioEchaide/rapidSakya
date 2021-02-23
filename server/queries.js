import { gql } from 'apollo-boost';
import { compose, graphql } from 'react-apollo';

export const getMenusQuery = gql`
{
    menus{
        id
        name
        price
        description
    }
}
`
export const getMenuByIdQuery= (id) = gql`
{
    menu(id:${id}) {
        id
        name
        price
        description
    }
}
`
export const getPromosQuery = gql`
{
    promos{
        id
        name
        price
        description
    }
}`

export const getPromoByIdQuery = (id) = gql`
{
    promo(id:${id}) {
        id
        name
        menues
        price
        description
    }
}
`
