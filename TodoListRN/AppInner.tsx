import * as React from 'react';
// Library
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Component
import Todo from "./src/pages/Todo";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppInner() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Todo"
        component={Todo}
        options={{
          title: '오늘 할 일',
          headerShadowVisible: false, // 헤더 밑에 라인 없애기
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  )
}

export default AppInner;