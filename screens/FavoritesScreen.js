import React, { useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import RecipeTile from '../components/RecipeTile';
import CustomHeaderButton from '../components/CustomHeaderButton';

import colors from '../themes/colors';

const FavoritesScreen = (props) => {
    const favRecipes = useSelector(state => state.recipes.favorites);
    const theme = useSelector(state => state.themes.dark) ? colors.dark : colors.basic;

    useEffect(() => {
        props.navigation.setParams({ elevation: theme.elevation, primary: theme.primary });
    }, [theme]);

    if (favRecipes.length === 0 || !favRecipes) {
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

FavoritesScreen.navigationOptions = (navData) => {
    const elevation = navData.navigation.getParam('elevation');
    const primary = navData.navigation.getParam('primary');
    return {
        headerStyle: {
            backgroundColor: elevation
        },
        headerTitleStyle: {
            color: primary,
            fontFamily: 'open-sans',
            fontSize: 22
        },
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        iconName='ios-menu'
                        color={colors.basic.dark}
                        title='Menu'
                        onPress={() => {
                            navData.navigation.toggleDrawer();
                        }} />
                </HeaderButtons>
            );
        }
    }
};

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
        textAlign: 'center',
        fontFamily: 'open-sans',
        fontSize: 20
    }
});
