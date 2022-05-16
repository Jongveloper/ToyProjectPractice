import React, { useCallback, useState, useRef } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const TodoSubmit = () => {
  const [newTodo, setNewTodo] = useState('');
  const todoRef = useRef<TextInput | null>(null);

  const onChangeTodo = useCallback((text: string) => {
    console.log(text)
    setNewTodo(text.trim())
  }, [])

  const createTodo = useCallback(() => {
    if (!newTodo || !newTodo.trim()) {
      return Alert.alert('알림', '아무것도 입력하지 않았어요!');
    }
    console.log(newTodo)
    setNewTodo('')
  }, [newTodo])

  const canGoNext = newTodo ? true : false
  return (
    <View style={style.container}>
      <Text style={style.colorText}>어떤 신나는 일이 기다리고 있을까요!?</Text>
      <View style={style.wrapper}>
        <TextInput
          style={style.textInput}
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
          style={style.buttonStyle}>
          <Text style={
            canGoNext
              ? StyleSheet.compose(style.buttonText, style.buttonActive)
              : style.buttonText
          }>등록</Text>
        </Pressable>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
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