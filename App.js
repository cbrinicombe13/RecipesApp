import React, { useState } from 'react';
import * as Font from 'expo-font';
import { enableScreens } from 'react-native-screens';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Nav from './navigation/Nav';
import recipesReducer from './store/reducers/recipes';

enableScreens();

const rootReducer = combineReducers({
  recipes: recipesReducer
});
const store = createStore(rootReducer);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const fetchFonts = async () => {
    await Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
  }

  if (!fontsLoaded) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFontsLoaded(true)} />
  }

  return (
    <Provider store={store}>
      <Nav />
    </Provider>
  );
}
