import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import RecipeTile from '../components/RecipeTile';
import { RECIPES } from '../data/data';

const FavoritesScreen = (props) => {
    const favs = RECIPES.filter(recipe => recipe.categoryIds.indexOf('c2') >= 0);

    const renderRecipe = (itemData) => {
        const { imageUrl, title, duration, complexity, affordability } = itemData.item;
        return (
            <RecipeTile
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'Recipe',
                        params: {
                            recipe: itemData.item,
                            source: 'Favorites'
                        }
                    });
                }}
                navigation={props.navigation}
                image={imageUrl}
                title={title}
                duration={duration}
                complexity={complexity}
                affordability={affordability}
                recipe={itemData.item}
            />
        );
    }


    return (
        <FlatList data={favs} renderItem={renderRecipe} numColumns={1} />
    );
}

export default FavoritesScreen

const styles = StyleSheet.create({

});
