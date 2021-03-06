import React, { useCallback, useState, useRef } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppDispatch } from "../../store";
import { addTodo } from "../../slices/todo";

const TodoSubmit = () => {
  const dispatch = useAppDispatch();
  const [newTodo, setNewTodo] = useState('');
  const todoRef = useRef<TextInput | null>(null);
  const randomId = Math.floor(Math.random() * 100)

  const onChangeTodo = useCallback((text: string) => {
    setNewTodo(text)
  }, [])

  const createTodo = useCallback(() => {
    if (!newTodo || !newTodo.trim()) {
      return Alert.alert('알림', '아무것도 입력하지 않았어요!');
    }
    dispatch(addTodo({ todo: newTodo, id: randomId }))

    setNewTodo('')
  }, [newTodo])

  const canGoNext = newTodo ? true : false
  return (
    <View style={styles.container}>
      <Text style={styles.colorText}>어떤 신나는 일을 계획하고 계신가요?</Text>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.textInput}
          value={newTodo}
          onChangeText={onChangeTodo}
          placeholder='오늘의 할일을 입력해보세요!'
          placeholderTextColor='#666'
          returnKeyType={"done"}
          importantForAutofill="yes"
          ref={todoRef}
          onSubmitEditing={createTodo}
          multiline={false}
        />
        <Pressable
          onPress={createTodo}
          style={styles.buttonStyle}>
          <Text style={
            canGoNext
              ? StyleSheet.compose(styles.buttonText, styles.buttonActive)
              : styles.buttonText
          }>등록</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  textInput: {
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 5,
    maxWidth: 300,
    minWidth: 300
  },
  colorText: {
    marginLeft: 3,
    color: 'black',
    fontWeight: '800'
  },
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  buttonStyle: {
    padding: 15,
  },
  buttonText: {
    fontWeight: '800',
    fontSize: 20,
    color: 'gray'
  },
  buttonActive: {
    color: '#8b00ff'
  }
})

export default TodoSubmit;