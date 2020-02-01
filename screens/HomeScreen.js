import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'

import { CATEGORIES } from '../data/data';
import HomeTile from '../components/HomeTile';



const HomeScreen = (props) => {

    const renderHomeTile = (itemData) => {
        return (
            <HomeTile
                onPress={() => {
                    const { id, title} = itemData.item
                    props.navigation.navigate({
                        routeName: 'Category',
                        params: {
                            catID: id,
                            catTitle: title
                        }
                    });
                }}
                color={itemData.item.color}
                title={itemData.item.title}/>
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderHomeTile}
            numColumns={2}/>
    );
}

export default HomeScreen
