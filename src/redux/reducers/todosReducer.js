const initialState = {
    todos: []
}

export const todosReducer = (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos:[...state.todos,action.payload]
            };
            default:
                return state
    }
}

const initialState1 = {
    events: []
}

export const eventsReducer = (state = initialState1, action) =>{
    switch(action.type){
        case 'ADD_EVENT':
            return {
                ...state,
                events:[...state.events,action.payload]
            };
            default:
                return state
    }
}