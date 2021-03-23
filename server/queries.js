import { gql } from '@apollo/client';

export const PROMOS = gql`
  query getPromos{
    promos{
      id
      price
      description
      name
    }
  }
  `;

 export const MENUS = gql`
  query getMenus{
    menues{
      price
      description
      name
      products{
        price
        description
        expiringDate
      }
    }
  }
  `;

 export const SINGLE_MENU = gql`
  query getMenuById($id: Int) {
    menu(id: $id) {
      id
      price
      name
      description
    }
  }
`;

export const ADD_ORDER = gql`
mutation AddOrder( $productus: [ productInput ], $price: float) {
  _id
}`;