import React from 'react'
import { View, Text } from 'react-native'

const CategoryScreen = (props) => {
    return (
        <View>
            <Text>Category Screen</Text>
        </View>
    )
}

CategoryScreen.navigationOptions = (navData) => {
    const catTitle = navData.navigation.getParam('catTitle');
    return {
        headerTitle: catTitle
    };
}

export default CategoryScreen
