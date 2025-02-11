import { combineReducers } from "redux";
import {CartReducer} from './ItemReducer'

const reducers=combineReducers({
    carfuntionalities:CartReducer,
});

export default reducers;