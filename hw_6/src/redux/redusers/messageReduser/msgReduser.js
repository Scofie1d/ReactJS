import {ADD_MSG, DEL_MSG} from "../../actions/actionTypes";


const initialState = {
    messages: [
        {
            id: 1,
            chatId: 1,
            title: 'Hi'
        },
        {
            id: 2,
            chatId: 2,
            title: 'Hi'
        },
        {
            id: 3,
            chatId: 1,
            title: 'Hi'
        }
    ]
}

export const msgReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MSG:
            return  {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case DEL_MSG:
            return {
                ...state,
                messages: state.messages.filter(item => item.id !== action.payload)
            };


        default:
            return state

    }
}