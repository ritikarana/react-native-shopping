import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from './screens/ProductList';
import ProductInfo from './screens/ProductInfo';
import Header from './shared/Header'

const Stack = createNativeStackNavigator();

const ShopTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(228 160 160)',
  },
};

function App() {
  return (
    <NavigationContainer theme={ShopTheme}>
      <Stack.Navigator initialRouteName="ProductList" screenOptions={{ headerRight: () => <Header /> }}>
        <Stack.Screen name="ProductList" component={ProductList} options={{ title: 'Super Shop' }} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} options={{ title: 'Product Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
