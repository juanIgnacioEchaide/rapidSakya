
const mutation {
addOrder(
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
 )
}