import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux';

import RecipeTile from '../components/RecipeTile';

const CategoryScreen = (props) => {

    const catID = props.navigation.getParam('catID');

    const recipes = useSelector(state => state.recipes.recipes);

    const displayRecipes = recipes.filter(recipe => {
        const catIds = recipe.categoryIds;
        return (catIds.find(id => id === catID));
    });

    const renderRecipe = (itemData) => {
        return (
            <RecipeTile
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Recipe',
                        params: {
                            recipe: itemData.item
                        }
                    });
                }}
                navigation={props.navigation}
                recipe={itemData.item}
                />
        );
    }

    return (
        <FlatList
            data={displayRecipes}
            renderItem={renderRecipe}
            numColumns={1}/>
    );
}

CategoryScreen.navigationOptions = (navData) => {
    const catTitle = navData.navigation.getParam('catTitle');
    return {
        headerTitle: catTitle
    };
}

export default CategoryScreen
