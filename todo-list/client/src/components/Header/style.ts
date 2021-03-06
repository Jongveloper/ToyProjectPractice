import styled from 'styled-components';
interface Prop {
  theme: {
    [propName: string]: any;
  };
}

const HeaderStyle = styled.div<Prop>`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export default HeaderStyle;
