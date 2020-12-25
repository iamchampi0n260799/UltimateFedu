import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import root from "../reducers";

const enhance = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

const store = createStore(
    root,
    enhance,
);

export default store;