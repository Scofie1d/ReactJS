import {createStore} from 'redux';
import {chatReduser} from './reducers/chatReduser';

export const store = createStore(chatReduser )