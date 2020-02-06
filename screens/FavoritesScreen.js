import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import RecipeTile from '../components/RecipeTile';
import { useSelector } from 'react-redux';

const FavoritesScreen = (props) => {

    const favRecipes = useSelector(state => state.recipes.favorites);

    if(favRecipes.length === 0 || !favRecipes) {
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText} numberOfLines={2}>Add favorites using the star icons!</Text>
            </View>
        );
    }

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
        <FlatList data={favRecipes} renderItem={renderRecipe} numColumns={1} />
    );
}

export default FavoritesScreen

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        padding: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fallbackText: {
        textAlign:'center',
        fontFamily: 'open-sans',
        fontSize: 20
    }
});
