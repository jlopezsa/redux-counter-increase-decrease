export const incrementValue = ()  => {
  return {
    type: 'INCREMENT',
  }
};

export const decrementValue = () => {
  return {
    type: 'DECREMENT',
  }
}

export const isCheckIncrement = (value) => {
  return {
    type: 'INCRES_OR_DECRES',
    isCheck: value,
  }
}

export const setMyInterval = (value) => {
  return {
    type: 'SET_INTERVAL',
    newValue: value
  }
};
