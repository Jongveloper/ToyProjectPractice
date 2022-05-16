import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import TodoSubmit from "../components/TodoSubmit";

function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <TodoSubmit />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
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