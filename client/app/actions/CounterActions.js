import axios from 'axios';
// This is the action creator. It's made up
// of two parts. The function is the creator
// of the action and the return attribute is
// the actual action.
export function selectCounter(counter) {
  return {
    // type of action occurred
    type: 'COUNTER_SELECT',
    payload: counter,
  };
};

export function getCounters() {
  console.log('CounterActions_getCounters');
  // return dispatch => {
  //   axios.get('/api/counters').then((response) => {
  //     console.log('response', response);
  //
  //     dispatch({
  //       type: 'COUNTER_LOADED',
  //       payload: response
  //     });
  //   });
  //
  // }
  return {
    type: 'COUNTER_LOADED',
    payload: new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([ { _id: 'test', count: 1 } ]);
      }, 2000);
    })
  };
}
