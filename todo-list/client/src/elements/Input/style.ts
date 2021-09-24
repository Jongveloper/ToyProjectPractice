import styled from 'styled-components';
import { borderBox } from '../../styles/Mixin';

export interface Prop {
  border?: string;
  radius?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  fs?: string;
  padding?: string;
  addstyle?: any;
  theme: {
    [propName: string]: any;
  };
}

const InputStyle = styled.input<Prop>`
  border: ${({ border }) => border};
  background: none;
  border-radius: ${({ radius }) => radius};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fs, theme }) => fs && theme.fontSize[fs]};
  ${({ padding }) => borderBox((padding = '0'))};

  &:focus {
    outline: none;
  }

  ${({ addstyle }) => addstyle};
`;

export default InputStyle;
