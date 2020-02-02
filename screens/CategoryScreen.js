import React from 'react'
import { FlatList } from 'react-native'

import { RECIPES } from '../data/data';
import RecipeTile from '../components/RecipeTile'

const CategoryScreen = (props) => {

    const catID = props.navigation.getParam('catID');
    const displayRecipes = RECIPES.filter(recipe => {
        const catIds = recipe.categoryIds;
        return (catIds.find(id => id === catID));
    });

    const renderRecipe = (itemData) => {
        const { imageUrl, title, duration, complexity, affordability } = itemData.item;
        return (
            <RecipeTile
                onPress={() => {}}
                image={imageUrl}
                title={title}
                duration={duration}
                complexity={complexity}
                affordability={affordability}
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
