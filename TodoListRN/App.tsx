import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Redux
import { Provider } from "react-redux";
import store from "./src/store";
// Routes
import AppInner from './AppInner';

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