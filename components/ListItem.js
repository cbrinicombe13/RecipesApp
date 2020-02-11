import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import colors from '../themes/colors';

const ListItem = (props) => {
    const [have, setHave] = useState(false);
    const theme = useSelector(state => state.themes.dark) ? colors.dark : colors.basic;

    const themeStyles = StyleSheet.create({
        itemContainer: {
            backgroundColor: theme.elevation
        },
        item: {
            color: theme.primary,
            textDecorationLine: have ? 'line-through' : 'none',
            textDecorationStyle: 'solid',
            textDecorationColor: 'black',
            fontFamily: 'open-sans'
        }
    });

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => setHave(!have)}>
            <View style={{ ...styles.itemContainer, ...themeStyles.itemContainer }}>
                <Text style={themeStyles.item}>{props.item}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default ListItem

const styles = StyleSheet.create({
    itemContainer: {
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    }
});
