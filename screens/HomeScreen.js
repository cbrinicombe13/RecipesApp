import React from 'react'
import { FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/data';
import HomeTile from '../components/HomeTile';
import CustomHeaderButton from '../components/CustomHeaderButton';

import colors from '../themes/colors';

const HomeScreen = (props) => {

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

export default HomeScreen
