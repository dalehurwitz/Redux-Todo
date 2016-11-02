import React from "react";
import { addTodo } from "../actions";
import { connect } from "react-redux";

// Intentionally not `const` here.
// We will override AddTodo later with a connected component.
const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        // This is a newer 0.14 syntax where ref can be a callback.
        // n.b. no `this` available in a functional/stateless component.
        // Here, we're making a closure over `input`, defined above.
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = '';
      }}>
        Add todo
      </button>
    </div>
  );
};

export default connect()(AddTodo);
