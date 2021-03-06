import React, { useState, useEffect, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { setFilters } from '../store/actions/recipes';
import CustomHeaderButton from '../components/CustomHeaderButton'
import Filter from '../components/Filter';
import colors from '../themes/colors';

const FiltersScreen = (props) => {
    const [glutenFree, setGlutenFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const [lactoseFree, setLactoseFree] = useState(false);

    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const filters = {
            glutenFree: glutenFree,
            vegan: vegan,
            vegetarian: vegetarian,
            lactoseFree: lactoseFree
        };
        dispatch(setFilters(filters));
    }, [glutenFree, vegan, vegetarian, lactoseFree, dispatch]);

    useEffect(() => {
        props.navigation.setParams({ save: saveFilters });
    }, [saveFilters]);

    return (
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Filters</Text>
            </View>
            <Filter label='Gluten Free' value={glutenFree} onValueChange={value => setGlutenFree(value)} />
            <Filter label='Vegan' value={vegan} onValueChange={value => setVegan(value)} />
            <Filter label='Vegetarian' value={vegetarian} onValueChange={value => setVegetarian(value)} />
            <Filter label='Lactose Free' value={lactoseFree} onValueChange={value => setLactoseFree(value)} />
        </View>
    );
}

FiltersScreen.navigationOptions = (navData) => {
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

export default FiltersScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
    },
    titleContainer: {
        marginTop: 20,
        marginBottom: 50
    },
    title: {
        fontFamily: 'open-sans',
        fontSize: 25
    }
});
