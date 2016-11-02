import { createStore } from "redux";
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";
import todoApp from "./reducers";

// Create the Redux store from the root reducer.
const configureStore = () => {
    const existingState = loadState();
    const store = createStore(todoApp, existingState);

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        });
    }, 1000));
    return store;
}

export default configureStore;
