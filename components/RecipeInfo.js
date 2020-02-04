import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Alert } from 'react-native'
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'

import uuid from 'uuid';

import colors from '../themes/colors';

const RecipeInfo = (props) => {

    const infoAlert = (message) => {
        if(props.navigation.state.routeName !== 'Recipe') {
            return;
        }
        return Alert.alert('Information', message);
    }

    return (
        <View style={{ ...styles.infoContainer, ...props.style }}>
            <TouchableWithoutFeedback onPress={() => infoAlert('Cooking Time')}>
                <View style={styles.third}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name='md-stopwatch' size={30} color={colors.basic.dark} />
                        <Text style={{ ...styles.info, marginLeft: 2 }}>{props.recipe.duration}m</Text>
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
                                color={colors.basic.dark} />)}
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
                                color={colors.basic.dark} />)}
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
        backgroundColor: colors.basic.pearl,
    },
    info: {
        color: colors.basic.dark,
        fontSize: 18,
    },
    third: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center'
    }
});
