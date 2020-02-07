import React from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'

import colors from '../themes/colors';

const Filter = (props) => {
    return (
        <View style={styles.switchContainer}>
            <Text style={styles.filterTitle}>{props.label}</Text>
            <Switch
                value={props.value}
                style={styles.switch}
                trackColor={{ true: colors.basic.indigo }}
                thumbColor={colors.basic.pearl}
                onValueChange={props.onValueChange} />
        </View>
    );
}

export default Filter

const styles = StyleSheet.create({
    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginVertical: 10,
        marginHorizontal: 30,
    },
    filterTitle: {
        fontFamily: 'open-sans',
        fontSize: 18
    },
    switch: {
        transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }]
    }
});
