import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const HomeTile = (props) => {
    return (
        <TouchableOpacity
            style={{ ...styles.cardContainer, backgroundColor: props.color }}
            activeOpacity={0.6}
            onPress={props.onPress}>
            <View style={styles.card}>
                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HomeTile

const styles = StyleSheet.create({
    cardContainer: {
        margin: 15,
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    card: {
        height: 150,
    },
    title: {
        fontSize: 22,
        fontFamily: 'open-sans'
    }
});
