import axios from '../axios-newTodo';



export const ADD_NEW_TODO = 'ADD_NEW_TODO';
export const CHANGE_NEW_TODO ='CHANGE_NEW_TODO';
export const REMOVE_NEW_TODO = 'REMOVE_NEW_TODO';
export const FETCH_NEW_TODO_REQUEST = 'FETCH_NEW_TODO_REQUEST';
export const FETCH_NEW_TODO_SUCCESS = 'FETCH_NEW_TODO_SUCCESS';
export const FETCH_NEW_TODO_ERROR = 'FETCH_NEW_TODO_ERROR';


export const adderToDo = (task) => {
    return (dispatch, getState) => {
        dispatch(fetchNewToDoRequest());
        axios.post('/info.json', {task: task}).then(() => {
           dispatch(fetchNewToDo());
        });
   }
};

export const changerToDo = (value) => {
  return {type: CHANGE_NEW_TODO, value: value}
};


export const removerToDo = (id) => {
    return (dispatch, getState) => {
    dispatch(fetchNewToDoRequest());
    axios.delete(`/info/${id}.json`).then(() => {
        dispatch(fetchNewToDo());
    });
   }
};

export const fetchNewToDoRequest = () => {
    return {type: FETCH_NEW_TODO_REQUEST};
};

export const fetchNewToDoSuccess = (info) => {
    return {type: FETCH_NEW_TODO_SUCCESS, info}
};

export const fetchNewToDoError = () => {
    return {type: FETCH_NEW_TODO_ERROR}
};

export const fetchNewToDo = () => {
    return (dispatch, getState) => {
        dispatch(fetchNewToDoRequest());
        axios.get('/info.json').then(response => {
            dispatch(fetchNewToDoSuccess(response.data));
        }, error => {
            dispatch(fetchNewToDoError());
        });
    }
};
