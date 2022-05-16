import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppInner from './AppInner';
import { Provider } from "react-redux";
import store from "./src/store";

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppInner />
      </NavigationContainer>
    </Provider>
  );
}

export default App;