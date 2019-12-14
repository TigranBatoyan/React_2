const initialState = {
    events: []
}

export const eventsReducer = (state = initialState, action) =>{
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