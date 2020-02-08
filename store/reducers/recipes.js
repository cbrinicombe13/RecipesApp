import { RECIPES } from '../../data/data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/recipes';

const initialState = {
    recipes: RECIPES,
    filteredRecipes: RECIPES,
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
        case SET_FILTERS:
            const filters = action.filters;
            const filteredRecipes = state.recipes.filter(recipe => {
                if (filters.glutenFree && !recipe.isGlutenFree) {
                    return false;
                }
                if (filters.lactoseFree && !recipe.lactoseFree) {
                    return false;
                }
                if (filters.vegan && !recipe.isVegan) {
                    return false;
                }
                if (filters.vegetarian && !recipe.isVegetarian) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredRecipes: filteredRecipes };
        default:
            return state;
    }
}

export default recipesReducer;