////////////////////////////////////////////////
//
// Redux action creators
//

// You could just litter the action object boilerplate all throughout
// the code. This is just DRY/shorthand...
//
// ...but it's actually more than that.
// (?) Closures mean I can keep state
// (?) Async operations are handled here!

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: Date.now(),
    text
});

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});
