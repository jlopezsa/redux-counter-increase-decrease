const initialState = {
  count: 0,
  setInter: 0,
  incrementIsCheck: true,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + state.setInter,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - state.setInter,
      }
    case 'SET_INTERVAL':
      return {
        ...state,
        setInter: parseInt(action.newValue),
      }
    case 'INCRES_OR_DECRES':
      return {
        ...state,
        incrementIsCheck: !action.isCheck,
      }
    case 'RESTAR':
      return initialState;
    default:
      return state;
  }
}

export default reducer;
