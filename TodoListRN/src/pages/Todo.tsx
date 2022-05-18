import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
// Components
import TodoBox from "../components/TodoBox";
import TodoSubmit from "../components/TodoSubmit";

function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoSubmit />
      <TodoBox />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    marginBottom: 20
  }
})

export default SignUp;