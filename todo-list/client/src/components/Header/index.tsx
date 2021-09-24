import React from 'react';
import HeaderStyle from './style';
import { Grid } from '../../elements'

const Header = () => {
  return (
    <>
      <HeaderStyle>
        <Grid
          height='100%'
          isFlex
          hoz='center'
          ver='center'>
          <p style={{ fontSize: '60px', margin: '80px 0', color: 'gray' }}>ToDoList</p>
        </Grid>
      </HeaderStyle>
    </>
  )
}


export default Header;