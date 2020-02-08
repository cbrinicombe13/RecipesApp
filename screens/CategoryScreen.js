import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';

import RecipeTile from '../components/RecipeTile';

const CategoryScreen = (props) => {

    const catID = props.navigation.getParam('catID');

    const recipes = useSelector(state => state.recipes.filteredRecipes);

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

    if (displayRecipes.length === 0 || !displayRecipes) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No recipes with current filters!</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={displayRecipes}
            renderItem={renderRecipe}
            numColumns={1} />
    );
}

CategoryScreen.navigationOptions = (navData) => {
    const catTitle = navData.navigation.getParam('catTitle');
    return {
        headerTitle: catTitle
    };
}

export default CategoryScreen

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fallbackText: {
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontSize: 20
    }
});
