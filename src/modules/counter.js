const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED',
  INCREMENT = 'counter/INCREMENT',
  DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED',
  DECREMENT = 'counter/DECREMENT',
  initialState = {
    count: 0,
    isIncrementing: false,
    isDecrementing: false
  },
  increment = () => (dispatch) => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    dispatch({
      type: INCREMENT
    });
  },
  incrementAsync = () => (dispatch) => {
    dispatch({
      type: INCREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      });
    }, 3000);
  },
  decrement = () => (dispatch) => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    dispatch({
      type: DECREMENT
    });
  },
  decrementAsync = () => (dispatch) => {
    dispatch({
      type: DECREMENT_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      });
    }, 3000);
  };


export {
  INCREMENT_REQUESTED,
  INCREMENT,
  DECREMENT_REQUESTED,
  DECREMENT,
  increment,
  incrementAsync,
  decrement,
  decrementAsync
};

export default (state = initialState, action) => {
  switch (action.type) {
  case INCREMENT_REQUESTED:
    return {
      ...state,
      isIncrementing: true
    };

  case INCREMENT:
    return {
      ...state,
      count: state.count + 1,
      isIncrementing: !state.isIncrementing
    };

  case DECREMENT_REQUESTED:
    return {
      ...state,
      isDecrementing: true
    };

  case DECREMENT:
    return {
      ...state,
      count: state.count - 1,
      isDecrementing: !state.isDecrementing
    };

  default:
    return state;
  }
};
