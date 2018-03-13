import {
    ADD_NEW_TODO,
    CHANGE_NEW_TODO, FETCH_NEW_TODO_ERROR, FETCH_NEW_TODO_REQUEST, FETCH_NEW_TODO_SUCCESS,
    REMOVE_NEW_TODO
} from "./actions";


const initialState = {
    info: {},
    tasks: '',
    loading: false
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
      case ADD_NEW_TODO:
          return {...state, info: action.info};
      case CHANGE_NEW_TODO:
          return {...state, tasks: action.value};
      case REMOVE_NEW_TODO:
          return {...state, info: state.info};
      case FETCH_NEW_TODO_REQUEST:
          return {...state, loading: true};
      case FETCH_NEW_TODO_SUCCESS:
          return {...state, info: action.info || {}, loading: false, tasks: ''};
      case FETCH_NEW_TODO_ERROR:
          return {...state, loading: false};
      default:
          return state;
  }
};


export default reducer;