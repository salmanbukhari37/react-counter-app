import React, { Component } from "react";
import CounterComponent from "./counterComponent";

class CountersComponent extends Component {
  render() {
    const {
      onReset,
      onIncrement,
      onDecrement,
      onDelete,
      counters
    } = this.props;

    console.log("Counters - Rendered");

    return (
      <>
        <button
          className="btn btn-danger btn-sm"
          style={{ marginTop: 60 }}
          onClick={onReset}
        >
          Reset
        </button>
        {counters.map(counter => (
          <CounterComponent
            key={counter.id}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
            counter={counter}
          />
        ))}
      </>
    );
  }
}

export default CountersComponent;
