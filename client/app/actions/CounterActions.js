// This is the action creator. It's made up
// of two parts. The function is the creator
// of the action and the return attribute is
// the actual action.
export const selectCounter = (counter) => {
  console.log('Click', counter);
  return {
    // type of action occurred
    type: "COUNTER_SELECT",
    payload: counter,
  };
};
