import React from 'react';
import TodoStyle from './style';
import { Grid, Button } from '../../elements';
import { css } from 'styled-components';
import { flexBox } from '../../styles/Mixin';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { removeTodo, todoInterface } from '../../redux/todo/todoSlice';

const TodoList = () => {
  const dispatch = useAppDispatch()
  const todoState = useAppSelector((state) => state.todo)

  const handleDelete = (i: number) => {
    dispatch(removeTodo(i))
  }

  const render = todoState.map((i: todoInterface, idx: number) => {
    return (
      <TodoStyle key={i.id}>
        <Grid
          addstyle={() => {
            return css`
        ${flexBox('flex-start', 'flex-start')}
        `;
          }}
        >
          <p style={{ margin: '20px 0px 20px 0', width: '100%', fontSize: '26px', fontWeight: 600 }}>{i.contents}</p>
          <Grid
            addstyle={() => {
              return css`
            ${flexBox('flex-end', 'flex-end')}
            `;
            }}>
            <Button margin='0 10px 0 0'
              _onClick={() => handleDelete(i.id)}
              addstyle={() => {
                return css`
              background-color: gray;
              color: white;
              line-height: 1.2;
              `;
              }}>x</Button>
          </Grid>
        </Grid>
      </TodoStyle>
    )
  })
  return (
    <div>{render}</div>
  )

}

export default TodoList;