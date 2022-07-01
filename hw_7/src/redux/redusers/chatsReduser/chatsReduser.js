
const initialState = {
    chats: [
        {
            id: 1,
            name: 'Михаил'
        },
        {
            id: 2,
            name: 'Пётр'
        }
    ]
}

export const chatsReduser = (state = initialState, action) => {
    switch (action.type) {


        default:
            return state

    }
}