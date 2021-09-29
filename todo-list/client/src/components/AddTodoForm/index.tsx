import React from 'react';
import { Button, Grid, Input } from '../../elements';
import { css } from 'styled-components'
import { flexBox } from '../../styles/Mixin';
import { todoInterface, addTodo } from '../../redux/todo/todoSlice';
import { useAppDispatch } from '../../redux/hooks';

const AddTodo = () => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = React.useState<string>('');
  const $todo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value)
  }

  const handleAddTodo = () => {
    if (todo.trim().length === 0) return
    const data: todoInterface = {
      id: Math.floor(Math.random() * 10000),
      contents: todo,
    }
    dispatch(addTodo(data))
    setTodo('')
  }


  return (
    <Grid
      width="35%"
      margin='0px auto'
      isFlex
      ver='center'
      hoz='center'
    >
      <Grid
        addstyle={() => {
          return css`
        ${flexBox('flex-start', 'flex-start')}
        `;
        }}
        margin='200px auto 40px auto'
      >
        <Input placeholder='오늘의 할 일을 입력하세요' _onChange={$todo} />
        <Button
          width='100px'
          height='40px'
          margin='5px 0 0 10px'
          color='white'
          _onClick={() => handleAddTodo()}
          addstyle={() => {
            return css`
            background-color: gray;
            color: white;
          `;
          }
          }
        >등록</Button>
      </Grid>
    </Grid >
  )
}


export default AddTodo;