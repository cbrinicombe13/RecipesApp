import React, { useEffect } from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/data';
import HomeTile from '../components/HomeTile';
import CustomHeaderButton from '../components/CustomHeaderButton';

import colors from '../themes/colors';

const HomeScreen = (props) => {
    const theme = useSelector(state => state.themes.dark) ? colors.dark : colors.basic;

    useEffect(() => {
        props.navigation.setParams({ elevation: theme.elevation, primary: theme.primary });
    }, [theme]);

    const renderHomeTile = (itemData) => {
        return (
            <HomeTile
                onPress={() => {
                    const { id, title } = itemData.item
                    props.navigation.navigate({
                        routeName: 'Category',
                        params: {
                            catID: id,
                            catTitle: title
                        }
                    });
                }}
                color={itemData.item.color}
                title={itemData.item.title} />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderHomeTile}
            numColumns={2} />
    );
}

HomeScreen.navigationOptions = (navData) => {
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
                        title='Menu'
                        onPress={() => {
                            navData.navigation.toggleDrawer();
                        }} />
                </HeaderButtons>
            );
        }
    }
};

export default HomeScreen
