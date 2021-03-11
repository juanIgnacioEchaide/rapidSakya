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
      id
      price
      description
      name
    }
  }
  `;


  export const ADD_MENU =  gql`
  mutation {
    addMenu(
        id: 20,
        description: "cool menu",
        price: 200.00,
        products: [ 
        { 
            id: 0,
            description: "hamburger",
            price: 150.00,
            expiringDate: "2021-03-30" },
        { 
            id: 1,
            description: "chips",
            price: 50.00,
            expiringDate:" 2021-03-11" 
        }]
     ){
       id
       description 
       price
       products{
        id
      }
     }
    }`

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