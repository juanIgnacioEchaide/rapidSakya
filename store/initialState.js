export const initialState ={
    user_settings:{      
        username: '',
        addresses:[],
        id_token: '',
        level: 0, 
        pic: '',
        payment_methods: []
        },
    history:{
        orders: [],
        qualifications: [],
        credit: 0,
        debt: 0,
        invoices: []
    },
    shop_kart:{
        products: [],
        destination: '',
        total: 0,
        checked: false,
        payment_method: {}
    },
    order_status: {}, 
    promos:{},    
}