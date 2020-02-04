import { RECIPES } from '../../data/data';
import { TOGGLE_FAVORITE } from '../actions/recipes';

const initialState = {
    recipes: RECIPES,
    favorites: []
};

const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const id = state.favorites.findIndex(recipes => recipes.id === action.recipeId);
            if (id >= 0) {
                const snapshot = [...state.favorites];
                const updatedFavorites = snapshot.splice(id, 1);
                return { ...state, favorites: updatedFavorites };
            } else {
                const newFavorite = state.recipes.find(recipe => recipe.id === action.recipeId);
                return { ...state, favorites: [...state.favorites, newFavorite] };
            }
        default:
            return state;
    }
    return state;
}

export default recipesReducer;