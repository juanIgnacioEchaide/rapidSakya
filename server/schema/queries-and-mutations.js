/* 
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
} */

/* mutation {
    addTicket(type:"purchase_order", 
      id: 3,
      author: "client 001", 
      date: "21-03-2021", 
      data: [{ price: 100.00 ,description:"", expiringDate: ""},{ price: 100.00 ,description:"", expiringDate: ""}]){
        id,
    		data{
          price
        }
    }
} */

/* mutation {
    addTicket(type:"purchase_order", 
      id: 4,
      author: "client 002", 
      date: "21-03-2021", 
      data: [{price: 100.00 ,description:"", expiringDate: ""},{price: 100.00 ,description:"", expiringDate: ""}]){
    		data{
          price
        }
    }
} */

/* mutation {
    addMenu(
      name:"menuName", 
      description: "menuDescript",
      price: 200.00,
      products: [{price: 100.00 ,description:"", expiringDate: ""},{price: 100.00 ,description:"", expiringDate: ""}]){
    		data{
          price
        }
    }
} */