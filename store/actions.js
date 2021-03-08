import { POST_ADD_ORDER, POST_ADD_ORDER_SUCCESS, POST_ADD_ORDER_ERROR, POST_ADD_TO_ORDER_CHECK } from './actionTypes';

export const postAddOrder = (order, checked) => ({
    type: POST_ADD_ORDER,
    payload: { order, checked }
})
export const postAddOrderSuccess = response => ({
    type: POST_ADD_ORDER_SUCCESS,
    payload: { response }
})
export const postAddOrderError = error => ({
    type: POST_ADD_ORDER_ERROR,
    payload: { error }
})
export const postAddOrderToCheck = order => ({
    type: POST_ADD_TO_ORDER_CHECK,
    payload: { order }
})
export const postAddToKart = product => ({
    type: POST_ADD_TO_KART,
    payload: { products }
})
export const postAddToKartSuccess = response => ({
    type: POST_ADD_TO_KART_SUCCESS,
    payload: { response }
})
export const postAddToKartError = error => ({
    type: POST_ADD_TO_KART_ERROR,
    payload: { error }
})