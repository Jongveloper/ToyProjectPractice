import React from 'react';
import TodoStyle from './style';
import { Grid, Button } from '../../elements';
import { css } from 'styled-components';
import { flexBox } from '../../styles/Mixin';

const TodoList = () => {
  return (
    <TodoStyle>
      <Grid
        addstyle={() => {
          return css`
      ${flexBox('flex-start', 'flex-start')}
      `;
        }}
      >
        <p style={{ margin: '20px 0px 20px 0', width: '100%', fontSize: '26px', fontWeight: 600 }}>투두리스트안녕</p>
        <Grid
          addstyle={() => {
            return css`
          ${flexBox('flex-end', 'flex-end')}
          `;
          }}>
          <Button margin='0 10px 0 0' addstyle={() => {
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
}

export default TodoList;