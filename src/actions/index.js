import {
    ADD_ROW, API_CONTROLLERS, API_ROOT,
    CLICK_BTN,
    RECEIVE,
    REQUEST,
} from "../constants";
import fetch from 'cross-fetch';

export function clickBtn(idx, isShiftPressed) {
    return {
        type: CLICK_BTN,
        idx: idx,
        shift: isShiftPressed,
    }
}

export function addRow(isShiftPressed) {
    return {
        type: ADD_ROW,
        shift: isShiftPressed,
    }
}

// stork
export function request(entityType) {
    return {
        type: REQUEST,
        entityType: entityType,
    }
}

export function receive(entityType, json) {
    return {
        type: RECEIVE,
        entityType: entityType,
        data: json,
    }
}

export function get(entityType) {  // асинхронное действие (thunk):
    return function (dispatch) {
        dispatch(request(entityType));
        return fetch(API_ROOT + API_CONTROLLERS[entityType]).then(        // запрос к эндпоинту
            response => response.json(),
            error => console.error('ERROR: ' + error)
        ).then(
            json => dispatch(receive(entityType, json))
        )
    }
}