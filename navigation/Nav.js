import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native'

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import RecipeScreen from '../screens/RecipeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import colors from '../themes/colors';
import { Ionicons } from '@expo/vector-icons';


const mainNav = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerTitle: 'Categories'
            }
        },
        Category: {
            screen: CategoryScreen
        },
        Recipe: {
            screen: RecipeScreen
        }
    }, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: colors.basic.pearl
        },
        headerTitleStyle: {
            color: colors.basic.dark,
            //fontFamily: 'open-sans',
            fontSize: 22
        }
    }
});

const FavTabNavConfig = {
    Main: {
        screen: mainNav,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />;
            }
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />;
            }
        }
    }
};

const FavTabNav = Platform.OS === 'ios'
    ? createBottomTabNavigator(FavTabNavConfig, {
        tabBarOptions: {
            activeTintColor: colors.basic.dark,
            inactiveTintColor: 'rgba(0,0,0,0.2)',
            tabStyle: {
                backgroundColor: colors.basic.pearl,
            },
            safeAreaInset: {
                bottom: 'never'
            }
        }
    })
    : createMaterialBottomTabNavigator(FavTabNavConfig, {
        activeColor: colors.basic.indigo,
        inactiveColor: 'rgba(0,0,0,0.2)',
        barStyle: {
            backgroundColor: colors.basic.pearl
        }
    });

export default createAppContainer(FavTabNav);