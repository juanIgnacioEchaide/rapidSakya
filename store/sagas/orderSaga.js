import { call, put, takeLatest, all, select } from 'redux-saga/effects';
import { postAddOrder, postAddOrderSuccess, postAddOrderError, postAddOrderToCheck} from '../actions';
import { getShopKart, getUser } from '../selectors';

function* postAddOrderSaga( options ={}){
    try {
        const user =  yield select(getUser)
        const kart = yield select(getShopKart)
        const timestamp = new Date();

         if(!kart.products){
            yield put(postAddOrderError('No tienes productos en tu carrito!'));
         }
         if(!kart.destination){
             yield put(postAddOrderError('¿A dónde querés que lo enviemos? Agrega una dirección'))
         }
         if(!kart.payment_method){
            yield put(postAddOrderError('¿Cómo querés pagar tu pedido? Agrega un medio de pago'))
         } 

         const data = {
             buyer: user,
             products: kart.products,
             destination: kart.destination,
             total: kart.price,
             date: timestamp,
         }

        yield put(postAddOrderToCheck(data));

        if(kart.checked){
            const order = yield put(postAddOrder(data));
        }

    }catch(e){      
        if( options.throwException) {
            throw e;
        }else{
            yield put(postAddOrderError(e));
        }
    }

    if(order){
        yield put(postAddOrderSuccess(order))
    }else{
        if(order.throwException) {
            throw e;
        }else{
            yield put(postAddOrderError(e));
        }
    }
}

function* watchPorstAddOrderSaga(){
    yield takeLatest(POST_ADD_ORDER, postAddOrderSaga);
}