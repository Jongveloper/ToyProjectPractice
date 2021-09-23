import styled from 'styled-components';

interface Prop {
  theme: {
    [propName: string]: any;
  };
}

const HeaderStyle = styled.header<Prop>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
`;

export default HeaderStyle;
