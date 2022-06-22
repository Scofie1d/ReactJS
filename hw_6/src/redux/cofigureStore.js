import {createStore, combineReducers} from 'redux';
import {msgReduser} from "./redusers/messageReduser/msgReduser";
import {chatsReduser} from "./redusers/chatsReduser/chatsReduser";

export const store = createStore(combineReducers({
    chats: chatsReduser,
    messages: msgReduser
}))