
import { 
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'
import articlesReducer, { initialState } from './articles/reducers';

const rootReducer = () => combineReducers({
    articlesStore: articlesReducer, 
});

const configStore = state => createStore(rootReducer(), state, applyMiddleware(thunk));

const store = configStore(initialState);

export default store;