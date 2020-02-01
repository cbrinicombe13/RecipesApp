import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import CategoryScreen from '../screens/CategoryScreen';
import RecipeScreen from '../screens/RecipeScreen';

import colors from '../themes/colors';

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
            fontFamily: 'open-sans',
            fontSize: 22
        }
    }
});

export default createAppContainer(mainNav);