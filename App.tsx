//for demo
console.disableYellowBox = true;


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import axios from 'axios';
import { Image, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import {SearchScreen} from './src/screens/SearchScreen'
import {FavoriteScreen} from './src/screens/FavoriteScreen'
import { RecipeDetailScreen } from './src/screens/RecipeDetailScreen';

import { SearchResultScreen } from './src/screens/SearchResultScreen';
import { PantryScreen } from './src/screens/PantryScreen'


import { Provider } from 'react-redux'
import { store } from './src/redux'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import RegisterPage from './src/Login/Register';
import LoginPage from './src/Login/Login';


const switchNavigator = createSwitchNavigator({

    register: RegisterPage,
    login: LoginPage,

    homeStack:  createBottomTabNavigator({

      // Home tab Icon
      home: {
        screen: createStackNavigator({
          HomePage: HomeScreen,
          RecipeDetailPage: RecipeDetailScreen
        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/home_icon.png') : require('./src/images/home_n_icon.png')
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      },

      // Search icon
      search: {
        screen: createStackNavigator({
          SearchPage: SearchScreen,
          SearchResultsPage: SearchResultScreen,
          RecipeDetailPage: RecipeDetailScreen
        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/offer_icon.png') : require('./src/images/offer_n_icon.png')
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      },

       // Home tab Icon
       Pantry: {
        screen: createStackNavigator({
          PantryPage: PantryScreen

        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/cart_icon.png') : require('./src/images/cart_n_icon.png')
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      },
       // Home tab Icon
       Favorites: {
        screen: createStackNavigator({
          FavoritePage: FavoriteScreen
        }),
        navigationOptions: {
          tabBarIcon: ({ focused, tintColor}) => {
            let icon = focused == true ? require('./src/images/account_icon.png') : require('./src/images/account_n_icon.png')
            return <Image source={icon} style={styles.tabIcon} />
          }
        }
      }
     })
    },
    {
      initialRouteName: 'login' //change this to something else if you want to work on that instead
});


const AppNavigation = createAppContainer(switchNavigator);


export default function App() {

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>

  );
}

const styles = StyleSheet.create({
   tabIcon: {
     width: 30,
     height: 30
   },

});
