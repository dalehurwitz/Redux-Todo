// 2nd level reducer
// Here, `state` refers to the array of todo objects
const todos = (state = [], action) => {
  console.log("todos reducer called");
  switch (action.type) {
    // Returns a new array of todos, containing the added todo as described by `action`.
    // The new todo is constructed by delegating to the `todo` reducer.
    case 'ADD_TODO':
      console.log('todos ADD_TODO');
      // ... below is ES6 "spread operator" (arrays only)
      return [
        ...state,
        todo(undefined, action)
      ];
    // Returns a new array of todos, with an individual todo's completed status
    // toggled as identified by `action.id`.
    // Must operate on entire list (seems wrong somehow).
    case 'TOGGLE_TODO':
      console.log('todos TOGGLE_TODO');
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

// 3rd level reducer.
// Here, `state` refers to a single todo object.
const todo = (state, action) => {
  console.log("todo reducer called");
  // Remember, no mutation.
  // Initial state is considered (or not, in the ADD_TODO case),
  // and used to construct a new state object, always.

  switch (action.type) {
    case 'ADD_TODO':
      console.log('todo ADD_TODO');
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      console.log('todo TOGGLE_TODO');
      // Bail out if the action is for a different todo than the one passed in.
      if (state.id !== action.id) {
        return state;
      }

      // ... below is ES7 "Object Rest Destructuring"
      // https://github.com/sebmarkbage/ecmascript-rest-spread/blob/master/Spread.md
      // Think of it as "and the rest", or "override these object properties"
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

export default todos;
