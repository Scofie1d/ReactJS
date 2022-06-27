import {applyMiddleware, createStore, combineReducers} from 'redux';
import {msgReduser} from "./redusers/messageReduser/msgReduser";
import {chatsReduser} from "./redusers/chatsReduser/chatsReduser";


const time = store => next => action => {
    const delay = action?.meta?.delay;
    if(!delay) {
        return next(action);
    }
    const timeOut = setTimeout(() => next(action), delay)

    return () => {
        clearTimeout(timeOut);
    }

}

export const store = createStore(combineReducers({
    chats: chatsReduser,
    messages: msgReduser
}), applyMiddleware(time))