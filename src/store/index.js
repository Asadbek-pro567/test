import {createStore, combineReducers} from 'redux'
import test from './test'

const reducer = combineReducers({
    test,
})

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store