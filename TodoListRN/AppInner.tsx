import * as React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Todo from "./src/pages/Todo";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppInner() {

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Todo"
        component={Todo}
        options={{ title: '오늘 할 일', headerShown: false }}
      />
    </Tab.Navigator>
  )
}

export default AppInner;