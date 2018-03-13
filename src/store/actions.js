import axios from '../axios-counter';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const FETCH_COUNTER_REQUEST = 'FETCH_COUNTER_REQUEST';
export const FETCH_COUNTER_SUCCESS = 'FETCH_COUNTER_SUCCESS';
export const FETCH_COUNTER_ERROR = 'FETCH_COUNTER_ERROR';

export const increaseCounter = () => {
    return (dispatch, getState) => {
        dispatch(fetchCounterRequest());
        axios.put('/counter.json', getState().counter + 1).then(response => {
            dispatch(fetchCounterSuccess(response.data))
        });
    }
};


export const decreaseCounter = () => {
    return (dispatch, getState) => {
        dispatch(fetchCounterRequest());
        axios.put('/counter.json', getState().counter - 1).then(response => {
           dispatch(fetchCounterSuccess(response.data))
        });
    };
};

export const addCounter = amount => {
    return (dispatch, getState) => {
        dispatch(fetchCounterRequest());
        axios.put('/counter.json', getState().counter + amount).then(response => {
           dispatch(fetchCounterSuccess(response.data))
        });
    };
};

export const subtractCounter = amount => {
    return (dispatch, getState) => {
        dispatch(fetchCounterRequest());
        axios.put('/counter.json', getState().counter - amount).then(response => {
            dispatch(fetchCounterSuccess(response.data))
        });
    };
};

export const fetchCounterRequest = () => {
  return {type: FETCH_COUNTER_REQUEST};
};

export const fetchCounterSuccess = (counter) => {
    return {type: FETCH_COUNTER_SUCCESS, counter}
};

export const fetchCounterError = () => {
  return {type: FETCH_COUNTER_ERROR}
};

export const fetchCounter = () => {
  return (dispatch, getState) => {
      dispatch(fetchCounterRequest());
      axios.get('/counter.json').then(response => {
        dispatch(fetchCounterSuccess(response.data));
      }, error => {
          dispatch(fetchCounterError());
      });
  }
};