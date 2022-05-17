import React, { useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Icon from 'react-native-vector-icons/Ionicons'

const TodoBox = () => {
  const todoList = useSelector((state: any) => state.todo.todo)

  return (
    <View style={styles.container}>
      {todoList.map((item: any, idx: number) => {
        return (
          <View style={styles.flex}>
            <Text key={idx} style={styles.todo}>{item.todo}</Text>
            <Pressable>
              <Icon name='trash-outline' size={20} color='black' />
            </Pressable>
          </View>
        )
      })}
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
  },
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
})

export default TodoBox;