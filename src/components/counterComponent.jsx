import React, { Component } from "react";
import "./counter.css";

class CounterComponent extends Component {
  disableClass = "";

  renderTags() {
    if (this.state.tags.length === 0)
      return <p className="alert alert-danger">There are no tags.</p>;

    return (
      <ul className="list-group">
        {this.state.tags.map(tag => (
          <li className="list-group-item" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("PrevProps", prevProps);
    console.log("PrevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      console.log("Ajax call");
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  render() {
    {
      this.props.counter.value == 0
        ? (this.disableClass = true)
        : (this.disableClass = false);
    }

    console.log("Counter - Rendered");

    return (
      <>
        <div className="row">
          <div className="col-1">{this.formatCount()}</div>
          <div className="col">
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() =>
                this.props.onIncrement(this.props.counter, { incrementBy: 1 })
              }
            >
              +
            </button>
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() =>
                this.props.onDecrement(this.props.counter, { decrementBy: 1 })
              }
              disabled={this.disableClass}
            >
              -
            </button>
            <button
              className="btn btn-danger sm m-2"
              onClick={() => this.props.onDelete(this.props.counter.id)}
            >
              X
            </button>
          </div>
        </div>
        {/* <div>
          {this.state.tags.length === 0 && "Please create a new tag"}
          {this.renderTags()}
        </div> */}
      </>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    let classes = "badge m-2 badge-";

    if (value === 0) {
      classes += "warning";
      return <span className={classes}>Zero</span>;
    } else if (value < 0) {
      classes += "danger";
      return <span className={classes}>{value}</span>;
    } else {
      classes += "primary";
      return <span className={classes}>{value}</span>;
    }
  }
}

export default CounterComponent;
