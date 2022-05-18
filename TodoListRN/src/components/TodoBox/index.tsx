import React, { useCallback } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
// Redux
import { useAppDispatch } from "../../store";
import { useTypedSelector } from "../../store/reducer";
import { deleteTodo, Todo } from "../../slices/todo";
// Icon
import Icon from 'react-native-vector-icons/Ionicons'

const TodoBox = () => {
  const dispatch = useAppDispatch();
  const todoList = useTypedSelector((state) => state.todo.todo)

  const todoHandler = useCallback((id: number) => {
    dispatch(deleteTodo(id))
  }, [dispatch])

  return (
    <View style={styles.container}>
      {todoList.map((item: Todo, idx: number) => {
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