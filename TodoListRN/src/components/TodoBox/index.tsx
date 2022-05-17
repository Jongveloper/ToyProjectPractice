import React, { useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import Icon from 'react-native-vector-icons/Ionicons'

import { deleteTodo } from "../../slices/todo";

const TodoBox = () => {
  const dispatch = useAppDispatch();
  const todoList = useSelector((state: any) => state.todo.todo)

  const todoHandler = useCallback((id: number) => {
    dispatch(deleteTodo(id))
  }, [dispatch])

  return (
    <View style={styles.container}>
      {todoList.map((item: any, idx: number) => {
        return (
          <View key={idx} style={styles.flex}>
            <Text style={styles.todo}>{item.todo}</Text>
            <Pressable
              onPress={() => { todoHandler(item.id) }}
            >
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