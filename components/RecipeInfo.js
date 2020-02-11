import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native'
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import uuid from 'uuid';
import colors from '../themes/colors';

const RecipeInfo = (props) => {
    const theme = useSelector(state => state.themes.dark) ? colors.dark : colors.basic;

    const infoAlert = (message) => {
        if(props.navigation.state.routeName !== 'Recipe') {
            return;
        }
        return Alert.alert('Information', message);
    };

    const themeStyles = StyleSheet.create({
        infoContainer: {
            backgroundColor: theme.elevation
        },
        info: {
            color: theme.primary,
        }
    });

    return (
        <View style={{ ...styles.infoContainer, ...props.style, ...themeStyles.infoContainer }}>
            <TouchableWithoutFeedback onPress={() => infoAlert('Cooking Time')}>
                <View style={styles.third}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='md-stopwatch' size={30} color={theme.primary} />
                        <Text
                            style={{ ...styles.info, marginLeft: 2, ...themeStyles.info }}>
                                {props.recipe.duration}m
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => infoAlert('Complexity')}>
                <View style={styles.third}>
                    <View style={{ flexDirection: 'row' }}>
                        {props.recipe.complexity.map(icon =>
                            <MaterialCommunityIcons
                                key={uuid.v4()}
                                name='silverware-fork'
                                size={25}
                                color={theme.primary} />)}
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => infoAlert('Affordability')}>
                <View style={styles.third}>
                    <View style={{ flexDirection: 'row' }}>
                        {props.recipe.affordability.map(icon =>
                            <Feather
                                key={uuid.v4()}
                                name='dollar-sign'
                                size={20}
                                color={theme.primary} />)}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

export default RecipeInfo

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
    },
    info: {
        fontSize: 18,
    },
    third: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }
});