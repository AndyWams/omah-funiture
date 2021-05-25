import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Home from './screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Details from './screens/Details';
import Profile from './screens/Profile';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Cart from './screens/Cart';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{header: () => null}}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{
            title: 'Product Detail',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#77838a',
              elevation: 0,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: '400',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'home') {
            iconName = 'home';
          } else if (route.name === 'cart') {
            iconName = 'shopping-cart';
          } else if (route.name === 'profile') {
            iconName = 'user';
          }
          return (
            <Icon name={iconName} type={'feather'} color={color} size={25} />
          );
        },
      })}
      barStyle={{backgroundColor: '#fff', elevation: 0}}
      labeled={false}
      activeColor={'#03293d'}
      inactiveColor={'gray'}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="cart" component={Cart} options={{title: 'Cart'}} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default App;
