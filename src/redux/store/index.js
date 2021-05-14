import { createStore, combineReducers} from 'redux';
import plateReducer from './plate/reducer'
import nameReducer from './name/reducer'

const reducers = combineReducers({
    plateReducer,
    nameReducer
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;