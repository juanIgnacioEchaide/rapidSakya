import { applyMiddleware, createStore } from 'redux';
import { rootReducer } from '../store/rootReducer';
import rootSaga from '../store/rootSaga';
import initialState from '../store/initialState';
import createSagaMiddleware from 'redux-saga';

const reduxSaga = createSagaMiddleware();

export default function configureStore( initialState ){

    const middlewares = [ reduxSaga ];
    const middlewareEnhancers = applyMiddleware( ...middlewares );
    const enhancers = [ middlewareEnhancer ];
    const composedEnhancers = composeWithDevTools( ...enhancers );
    const store = createStore(rootReducer, initialState, composedEnhancers);

    sagaMiddleware.run( rootSaga);

    return store
}
