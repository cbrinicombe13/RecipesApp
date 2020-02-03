import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native'
import colors from '../themes/colors';

import RecipeInfo from '../components/RecipeInfo';

const RecipeTile = (props) => {
    return (
        <TouchableOpacity
            style={styles.cardContainer}
            activeOpacity={0.6}
            onPress={props.onPress}>
            <ImageBackground
                source={{ uri: props.image }} style={styles.bgImage}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                </View>
            </ImageBackground>
            <RecipeInfo recipe={props.recipe} navigation={props.navigation} style={styles.recipeInfo}/>
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
        padding: 5,
        height: '20%',
        width: '90%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: borderRadius,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    infoContainer: {
        flexDirection: 'row',
        padding: 2,
        justifyContent: "space-around",
        backgroundColor: colors.basic.pearl,
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius
    },
    bgImage: {
        flex: 1,
        overflow: "hidden",
        borderTopRightRadius: borderRadius,
        borderTopLeftRadius: borderRadius
    },
    title: {
        color: colors.basic.pearl,
        fontSize: 22
    },
    recipeInfo: {
        borderBottomLeftRadius: borderRadius,
        borderBottomRightRadius: borderRadius
    }
});
