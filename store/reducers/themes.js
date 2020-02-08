import { TOGGLE_DARK } from '../actions/themes'

const initialState = {
    dark: false
};

const themesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARK:
            return {
                dark: !state.dark
            };
        default:
            return state;
    }
};

export default themesReducer;