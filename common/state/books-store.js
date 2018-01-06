import { createStore } from 'redux'
import {globalStateReducer} from './global-state-reducer';
let store = createStore(globalStateReducer);

export default store;