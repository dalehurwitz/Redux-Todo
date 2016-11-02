//////////////////////////////////////////////////
//
// Root reducer, root component, initial render
//

import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import { combineReducers } from "redux";


// Top level reducer.
const todoApp = combineReducers({
  // n.b. following syntax is ES6 Object Initializer (shorthand property names)
  todos,              // todos: todos,
  visibilityFilter    // visibilityFilter: visibilityFilter
});

export default todoApp;
