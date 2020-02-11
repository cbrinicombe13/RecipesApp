import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { toggleDark } from '../store/actions/themes'
import CustomHeaderButton from '../components/CustomHeaderButton'
import Filter from '../components/Filter'
import colors from '../themes/colors'

const SettingsScreen = (props) => {
    const [dark, setDark] = useState(false);
    const theme = useSelector(state => state.themes.dark) ? colors.dark : colors.basic;

    const dispatch = useDispatch();

    const saveDark = (value) => {
        setDark(value);
        const state = {
            dark: dark
        };
        dispatch(toggleDark(state));
    }

    useEffect(() => {
        props.navigation.setParams({ elevation: theme.elevation, primary: theme.primary });
    }, [theme]);

    return (
        <View styles={{ ...styles.screen, backgroundColor: theme.surface }}>
            <View style={styles.titleContainer}>
                <Text style={{ ...styles.title, color: theme.primary }}>Settings</Text>
            </View>
            <Filter label='Dark Mode' value={dark} onValueChange={saveDark} />
        </View>
    );
}

export default SettingsScreen

SettingsScreen.navigationOptions = (navData) => {
    const elevation = navData.navigation.getParam('elevation');
    const primary = navData.navigation.getParam('primary');
    return {
        headerTitleStyle: {
            color: primary,
            fontFamily: 'open-sans',
            fontSize: 22
        },
        headerStyle: {
            backgroundColor: elevation
        },
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
        }
    }
};

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
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