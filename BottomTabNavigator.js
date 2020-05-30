import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from './TabBarIcon';
import GlobalScreen from './GlobalScreen';
import CountriesScreen from './CountriesScreen';
import AboutScreen from './AboutScreen';
import Colors from './Color';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Global';

const getHeaderTitle = (route) => {
  const routeName = route.state?.routes[route.state.index]?.name || INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';

    case 'Global':
      return 'Global Coronavirus information';

    case 'Countries':
      return 'Coronavirus by Country';

    case 'About':
      return 'About'
  }
}

const BottomTabNavigator = ({ navigation, route }) => {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        style: {
          backgroundColor: Colors.black
        }
      }}
    >
      <BottomTab.Screen
        name="Global"
        component={GlobalScreen}
        options={{
          title: 'Global',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-globe" />,
        }}
      />

      <BottomTab.Screen
        name="Countries"
        component={CountriesScreen}
        options={{
          title: 'Countries',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-flag" />,
        }}
      />

      <BottomTab.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-help-circle" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;