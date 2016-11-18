import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
let doctbdy;

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 

  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 15});
        }}
      >
        Count: {this.state.count}
      
      </button>
    );
  }
}
export default Counter;
