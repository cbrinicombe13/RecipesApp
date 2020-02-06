import React, { useEffect, useCallback } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';

import RecipeInfo from '../components/RecipeInfo';
import ListItem from '../components/ListItem';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { toggleFavorite } from '../store/actions/recipes';

import colors from '../themes/colors';

const RecipeScreen = (props) => {
    const recipe = props.navigation.getParam('recipe');
    const recipeIsFav = useSelector(state => state.recipes.favorites.some(recipe => recipe.id === recipe.id));

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(recipe.id));
    }, [dispatch, recipe.id]);

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        props.navigation.setParams({ isFav: recipeIsFav});
    }, [recipeIsFav]);

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{recipe.title}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image source={{ uri: recipe.imageUrl }} style={styles.bgImage} />
            </View>
            <RecipeInfo style={styles.recipeInfo} recipe={recipe} navigation={props.navigation} />
            <View style={styles.ingredientsContainer}>
                <TouchableWithoutFeedback onPress={() => Alert.alert('Information', 'Ingredients')}>
                    <View style={styles.ingredientsHeader}>
                        <Ionicons name='ios-basket' size={30} color={colors.basic.dark} />
                    </View>
                </TouchableWithoutFeedback>
                {recipe.ingredients.map(item => {
                    return (
                        <ListItem key={recipe.ingredients.indexOf(item)} item={item} />
                    );
                })}
            </View>
            <View style={styles.ingredientsContainer}>
                <View style={styles.ingredientsHeader}>
                    <Text style={styles.info}>Method</Text>
                </View>
                {recipe.steps.map(item => {
                    return (
                        <ListItem key={recipe.steps.indexOf(item)} item={item} />
                    );
                })}
            </View>
        </ScrollView>
    );
}

RecipeScreen.navigationOptions = navData => {
    const toggleFav = navData.navigation.getParam('toggleFav');
    const isFav = navData.navigation.getParam('isFav');
    return {
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        iconName={isFav ? 'ios-star' : 'ios-star-outline'}
                        color={colors.basic.dark}
                        title='Favorite'
                        onPress={toggleFav} />
                </HeaderButtons>
            );
        }
    }

}

export default RecipeScreen

const borderRadius = 10;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        margin: 10,
    },
    titleContainer: {
        margin: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: borderRadius,
        backgroundColor: colors.basic.pearl
    },
    title: {
        fontSize: 22,
        color: colors.basic.dark
    },
    imageContainer: {
        marginHorizontal: 10,
        marginVertical: 5,
        height: 200
    },
    bgImage: {
        width: '100%',
        height: '100%',
        overflow: "hidden",
        borderRadius: borderRadius
    },
    info: {
        color: colors.basic.dark,
        fontSize: 18,
    },
    ingredientsHeader: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: colors.basic.dark,
        borderBottomWidth: 1
    },
    ingredientsContainer: {
        marginHorizontal: 10,
        marginVertical: 5
    },
    itemContainer: {
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: borderRadius,
        backgroundColor: colors.basic.pearl
    },
    recipeInfo: {
        borderRadius: borderRadius,
        padding: 10,
        margin: 10,
    }
});
