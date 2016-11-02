import React from "react";
import Todo from "./Todo";

// This is a "stateless component". It gets `props` passed in.
// https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html#stateless-function-components
// Notice the curlybraces in the parameter list. This is destructuring
// `props` (e.g. filter = props.filter, children = props.children)
const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

export default TodoList;
