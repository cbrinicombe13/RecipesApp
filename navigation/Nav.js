import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import RecipeScreen from '../screens/RecipeScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import SettingsScreen from '../screens/SettingsScreen';

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
            screen: RecipeScreen,
        }
    });

const FavStackNav = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        Recipe: RecipeScreen
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
        screen: FavStackNav,
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

const FiltersStack = createStackNavigator({
    Filters: FiltersScreen
});

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen
});

const drawerNav = createDrawerNavigator({
    FavTabNav: {
        screen: FavTabNav,
        navigationOptions: {
            drawerLabel: 'Categories'
        }
    },
    Filters: {
        screen: FiltersStack,
        navigationOptions: {
            headerTitle: 'Filters'
        }
    },
    Settings: {
        screen: SettingsStack,
        navigationOptions: {
            drawerLabel: 'Settings'
        }
    }
}, {
    contentOptions: {
        activeTintColor: colors.basic.indigo,
        labelStyle: {
            fontFamily: 'open-sans',
            fontSize: 20
        }
    }
});

export default createAppContainer(drawerNav);