import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


let initialState = {};

const reducer = (state = initialState,  action) => {
    switch(action.type){
        case 'LOADING':
            return {
                verified: state.verified,
                token: state.token,
                'loading': true,
                'success': null
            }
        case 'SUCCESS':
            return {
                'loading': false,
                'success': action.payload.success,
                'token': action.payload.token,
                verified: action.payload.verified
            }

        case 'FAIL':
            return {
                'loading': false,
                'success': false,
                'error': action.payload.error,
                token: action.payload.token,
                verified: state.verified
            }
        default:
            return state
    }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;