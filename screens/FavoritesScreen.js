import React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import RecipeTile from '../components/RecipeTile';
import { useSelector } from 'react-redux';

const FavoritesScreen = (props) => {

    const favRecipes = useSelector(state => state.recipes.favorites);

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
        <FlatList data={favRecipes} renderItem={renderRecipe} numColumns={1} />
    );
}

export default FavoritesScreen
