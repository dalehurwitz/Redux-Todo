// 2nd level reducer
// Here, `state` refers to a simple configuration string (enum/atom)
// Remember, we are only returning the state we are concerned with
const visibilityFilter = (state = 'SHOW_ALL', action) => {
  console.log("visibilityFilter reducer called");
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
