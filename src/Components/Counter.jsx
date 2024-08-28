import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { incrementSagaCount }/ from "../store/Counter/counter.action";
import { incrementSagaCount } from "../Store/Counter/counterAction";

class CounterTest extends Component {
  render() {

    return (
      <div className="my-32 mx-auto w-32 text-center text-lg font-bold">
        <h1>Count: {this.props.count}</h1>
        <button className="bg-white rounded-lg p-1 w-full" onClick={() => this.props.incrementAction()}>Click Me</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
     count: state.counter.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      incrementAction: incrementSagaCount,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterTest);
