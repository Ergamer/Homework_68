import {INCREMENT, DECREMENT, ADD, SUBTRACT, FETCH_COUNTER_SUCCESS,
    FETCH_COUNTER_REQUEST, FETCH_COUNTER_ERROR} from "./actions";

const initialState = {
    counter: 0,
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {counter: state.counter + 1};
        case DECREMENT:
            return {counter: state.counter - 1};
        case ADD:
            return {counter: state.counter + action.amount};
        case SUBTRACT:
            return {counter: state.counter - action.amount};
        case FETCH_COUNTER_REQUEST:
            return {...state, loading: true};
        case FETCH_COUNTER_SUCCESS:
            return {...state, counter: action.counter, loading: false};
        case FETCH_COUNTER_ERROR:
            return {...state, loading: false};
        default:
            return state;
    }
};

export default reducer;