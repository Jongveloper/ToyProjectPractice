import styled from 'styled-components';
interface Prop {
  theme: {
    [propName: string]: any;
  };
}

const TodoStyle = styled.div<Prop>`
  flex: 1;
  margin: auto;
  width: 35%;
`;

export default TodoStyle;
