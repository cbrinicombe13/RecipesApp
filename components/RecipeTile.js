import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import { useSelector } from 'react-redux'
import colors from '../themes/colors';

import RecipeInfo from '../components/RecipeInfo';

const RecipeTile = (props) => {
    const isDark = useSelector(state => state.themes.dark);
    const theme = isDark ? colors.dark : colors.basic;

    const themeStyles = StyleSheet.create({
        titleContainer: {
            backgroundColor: isDark ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.5)',
        },
        title: {
            color: isDark ? theme.primary : colors.basic.elevation,
        }
    });

    return (
        <TouchableOpacity
            style={styles.cardContainer}
            activeOpacity={0.6}
            onPress={props.onPress}>
            <ImageBackground
                source={{ uri: props.recipe.imageUrl }} style={styles.bgImage}>
                <View style={{ ...styles.titleContainer, ...themeStyles.titleContainer }}>
                    <Text style={{ ...styles.title, ...themeStyles.title }} numberOfLines={1}>{props.recipe.title}</Text>
                </View>
            </ImageBackground>
            <RecipeInfo recipe={props.recipe} navigation={props.navigation} style={styles.recipeInfo} />
        </TouchableOpacity >
    );
}

export default RecipeTile

const borderRadius = 10;

const styles = StyleSheet.create({
    cardContainer: {
        margin: 15,
        height: 200,
        flex: 1,
        borderRadius: borderRadius,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: borderRadius,
        elevation: 3,
    },
    titleContainer: {
        margin: 5,
        padding: 2,
        height: '23%',
        width: '90%',
        borderRadius: borderRadius,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    bgImage: {
        flex: 1,
        overflow: "hidden",
        borderTopRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius
    },
    title: {
        color: colors.basic.pearl,
        fontSize: 22,
        fontFamily: 'open-sans'
    },
    recipeInfo: {
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius
    }
});
