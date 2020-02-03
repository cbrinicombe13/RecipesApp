import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import colors from '../themes/colors';

const ListItem = (props) => {
    const [have, setHave] = useState(false);

    const condStyle = StyleSheet.create({
        itemContainer: {
            backgroundColor: have ? colors.basic.indigo : colors.basic.pearl,
            
        },
        item: {
            textDecorationLine: have ? 'line-through' : 'none',
            textDecorationStyle: 'solid',
            textDecorationColor: 'black'
        }
    });

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => setHave(!have)}>
            <View style={{ ...styles.itemContainer, ...condStyle.itemContainer }}>
                <Text style={condStyle.item}>{props.item}</Text>
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
