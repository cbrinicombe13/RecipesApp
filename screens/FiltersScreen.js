import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from '../components/CustomHeaderButton'

import Filter from '../components/Filter';
import colors from '../themes/colors';

const FiltersScreen = (props) => {
    const [glutenFree, setGlutenFree] = useState(false);
    const [vegan, setVegan] = useState(false);
    const [vegetarian, setVegetarian] = useState(false);
    const [lactoseFree, setLactoseFree] = useState(false);

    return (
        <View style={styles.screen}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Filters</Text>
            </View>
            <Filter label='Gluten Free' value={glutenFree} onValueChange={value => setGlutenFree(value)}/>
            <Filter label='Vegan' value={vegan} onValueChange={value => setVegan(value)}/>
            <Filter label='Vegetarian' value={vegetarian} onValueChange={value => setVegetarian(value)}/>
            <Filter label='Lactose Free' value={lactoseFree} onValueChange={value => setLactoseFree(value)}/>
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
