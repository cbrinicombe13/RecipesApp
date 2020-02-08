export const TOGGLE_DARK = 'TOGGLE_DARK';

export const toggleDark = theme => {
    return {
        type: TOGGLE_DARK,
        theme: theme
    };
}