import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Counters extends Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <h1>Counters</h1>
        {
          (this.props.counters) ? (
            (this.props.counters).map(counter => {
              return (
                <li key={Math.random()}>{counter._id} - {counter.count}</li>
              )
            })
          ) : (null)
        }
      </div>
    );
  }
}

// Takes the application store (main data) and passes into
// your container as a prop. It can pass any aspect of the
// store. So we want counters, so state.counters. We can
// now reference this.props.counters to grab counters in
// store.
function mapStateToProps(state) {
  return {
    counters: state.counters
  };
};

export default connect(mapStateToProps)(Counters);
