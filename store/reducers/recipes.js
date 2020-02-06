import { RECIPES } from '../../data/data';
import { TOGGLE_FAVORITE } from '../actions/recipes';

const initialState = {
    recipes: RECIPES,
    favorites: []
};

const recipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const index = state.favorites.findIndex(recipes => recipes.id === action.recipeId);
            if (index >= 0) {
                const updatedFavs = [...state.favorites];
                updatedFavs.splice(index, 1);
                return { ...state, favorites: updatedFavs };
            } else {
                const newFavorite = state.recipes.find(recipe => recipe.id === action.recipeId);
                return { ...state, favorites: [...state.favorites, newFavorite] };
            }
        default:
            return state;
    }
}

export default recipesReducer;