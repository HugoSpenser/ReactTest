import {
    ADD_ROW,
    CLICK_BTN,
    RECEIVE,
    REQUEST
} from "../constants";
import {combineReducers} from "redux";

function btnReducer(state = [], action) {
    let newState;
    switch (action.type) {
        case CLICK_BTN:
            newState = JSON.parse(JSON.stringify(state))
            let i = action.idx;
            newState.counters[i] = state.counters[i] + (action.shift ? -1 : +1);
            return newState;
        case ADD_ROW:
            newState = {
                counters: [...state.counters]
            };
            if (action.shift)
                newState.counters.pop();
            else
                newState.counters.push(0);
            return newState;
        default:
            return state;
    }
}

export default combineReducers(
    {
        simpletable: btnReducer,
        /*stork: combineReducers({tests: tests, cts: cts})*/
        stork: stork,
    }
);

// v2
function stork(state = [], action) {
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case REQUEST:
            newState[action.entityType].isFetching = true;
            return newState;
        case RECEIVE:
            newState[action.entityType] = {
                list: action.data,
                isFetching: false
            };
            return newState;
        default:
            return state;
    }
}