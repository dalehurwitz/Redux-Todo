import TodoList from "./TodoList";
import { connect } from "react-redux";
import { toggleTodo } from "../actions";

const getVisibleTodos = (todos, filter) => {
  console.log(`getVisibleTodos: todos=${todos} filter=${filter}`);
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

// This takes Redux state, and returns the props needed
// for the presentational component.
const mapStateToTodoListProps = (state) => ({
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
});

// This takes the store's dispatch method, and returns the
// callbacks props needed for the presentational component.
const mapDispatchToTodoListProps = (dispatch) => ({
    onTodoClick(id) {
      dispatch(toggleTodo(id));
    }
});

const VisibleTodoList = connect(
  mapStateToTodoListProps, mapDispatchToTodoListProps
)(TodoList);

export default VisibleTodoList;
