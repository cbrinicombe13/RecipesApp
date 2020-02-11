import React, { useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';

import colors from '../themes/colors';
import RecipeTile from '../components/RecipeTile';

const CategoryScreen = (props) => {
    const catID = props.navigation.getParam('catID');
    const recipes = useSelector(state => state.recipes.filteredRecipes);
    const theme = useSelector(state => state.themes.dark) ? colors.dark : colors.basic;

    useEffect(() => {
        props.navigation.setParams({ elevation: theme.elevation, primary: theme.primary });
    }, [theme]);

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
    const elevation = navData.navigation.getParam('elevation');
    const primary = navData.navigation.getParam('primary');
    return {
        headerTitle: catTitle,
        headerStyle: {
            backgroundColor: elevation
        },
        headerTitleStyle: {
            color: primary,
            fontFamily: 'open-sans',
            fontSize: 22
        },
        headerTintColor: primary
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
