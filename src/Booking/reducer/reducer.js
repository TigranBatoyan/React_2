export default function reducer(state, action) {
    switch (action.type) {
        case 'country':
           return {
               ...state,
               countries:action.payload
           }

        case 'airline':
            return {
                ...state,
                airlines:action.payload
            }


        default:
            return state
    }
}