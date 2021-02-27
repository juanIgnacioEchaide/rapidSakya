import { gql } from '@apollo/client';

export const PROMOS = gql`
  {
    promos{
      id
      name
      price
      description
    }
  }
`

export const MENUS = gql`
{
    menus{
      id
      name
      price
      description
    }
  }
`
