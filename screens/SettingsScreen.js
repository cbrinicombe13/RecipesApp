import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { toggleDark } from '../store/actions/themes'
import CustomHeaderButton from '../components/CustomHeaderButton'
import Filter from '../components/Filter'
import colors from '../themes/colors'

const SettingsScreen = (props) => {
    const [dark, setDark] = useState(false);

    const dispatch = useDispatch();

    const saveState = useCallback(() => {
        const state = {
            dark: dark
        };
        dispatch(toggleDark(state));
    }, [dark]);

    useEffect(() => {
        props.navigation.setParams({ save: saveState });
    }, [saveState]);

    return (
        <View styles={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Settings</Text>
            </View>
            <Filter label='Dark Mode' value={dark} onValueChange={value => setDark(value)} />
        </View>
    );
}

export default SettingsScreen

SettingsScreen.navigationOptions = (navData) => {
    return {
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
        },
        headerRight: () => {
            return (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        iconName='ios-save'
                        color={colors.basic.dark}
                        title='Save'
                        onPress={navData.navigation.getParam('save')} />
                </HeaderButtons>
            );
        }
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    titleContainer: {
        marginTop: 20,
        marginBottom: 50,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans',
        fontSize: 25
    },
    switch: {
        transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }]
    }
});