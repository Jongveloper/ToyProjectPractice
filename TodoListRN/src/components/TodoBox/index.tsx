import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

const TodoBox = () => {
  const dummy = [
    {
      id: 1,
      contents: '타입스크립트'
    },
    {
      id: 2,
      contents: '자바스크립트'
    },
    {
      id: 3,
      contents: '리액트 네이티브'
    },
    {
      id: 4,
      contents: '리액트'
    }
  ]

  return (
    <View style={styles.container}>
      {dummy.map((item, idx) => {
        return (
          <Text key={idx} style={styles.todo}>{item.contents}</Text>
        )
      })}
      <Text style={styles.todo}>우와 신나는일!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 7
  },
  todo: {
    fontWeight: '700',
    padding: 5
  }
})

export default TodoBox;