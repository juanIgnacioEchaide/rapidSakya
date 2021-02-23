import { gql } from '@apollo/client';

export const PROMOS = gql`
  query GetPromos {
    promos{
      id
      name
      price
      description
    }
  }
`

export const MENUS = gql`
  query GetMenus {
    menus{
      id
      name
      price
      description
    }
  }
`

