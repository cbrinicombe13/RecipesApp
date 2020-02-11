import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, Switch } from 'react-native'

import colors from '../themes/colors';

const Filter = (props) => {
    const theme = useSelector(state => state.themes.dark) ? colors.dark : colors.basic;

    return (
        <View style={styles.switchContainer}>
            <Text style={{ ...styles.filterTitle, color: theme.primary }}>{props.label}</Text>
            <Switch
                value={props.value}
                style={styles.switch}
                trackColor={{ true: theme.elevation }}
                thumbColor={theme.primary}
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
