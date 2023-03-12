
export const initialState = {
    question: [],
    answer: [],
    result: [],
    userId: 'matti ullah',
    trace: 0,
}
export const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_QUESTION':
            return {
                ...state, question: action.question
            }

        case 'SET_ANSWER':
            return {
                ...state, answer: action.answer
            }
        case 'SET_TRACE':
            return {
                ...state, trace: action.trace
            }
        case 'SET_RESULT':
            return {
                ...state, result: action.result
            }
        case 'SET_USERID':
            return {
                ...state, userId: action.userId
            }
        default:
            return state;
    }
}