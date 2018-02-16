/*
 * This function returns an array of counters. Any element
 * you want to be saved into the store.
 */
export const getCounters = () => {
  return [
    {
      _id: 'test1',
      count: 2
    },
    {
      _id: 'test2',
      count: 7
    }
  ]
};

// This function lists for the ACTION. Whenever, any action gets
// called. It goes to all reducers.
// This will return the current active counter (selected one).
// State starts as null so if it's not selected. This is where
// you can default user if want.
// It will pass in the action too. You can check the type and
// payload.
// Reducers need to return some piece of data, hence payload.
export const selectedCounter = (state = null, action) => {
  switch (action.type) {
    case 'COUNTER_SELECT':
      return action.payload;
      break;
  }
  return state;
};
