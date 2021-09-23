import styled, { css } from 'styled-components';

import { borderBox, flexBox } from '../../styles/Mixin';

export interface Prop {
  isFlex?: boolean;
  hoz?: string;
  ver?: string;
  width?: string;
  height?: string;
  margin?: string;
  bgColor?: string;
  radius?: string;
  border?: string;
  color?: string;
  padding?: string;
  fs?: string;
  fw?: string;
  addstyle?: any;
  theme: {
    [propName: string]: any;
  };
}

const makeItFlexBox = css<Prop>`
  ${({ hoz, ver }) =>
    flexBox((hoz = 'center'), (ver = 'center'), 'inline-flex')}
`;

const buttonShapeSetting = (form: string) => {
  switch (form) {
    case 'text':
      return css<Prop>`
        background: none;
        padding: 0;
        color: ${({ color, theme }) => color && theme.color[color]};
      `;
    default:
      return css<Prop>`
        background-color: ${({ bgColor, theme }) =>
          theme.color[(bgColor = 'gray')]};
        color: ${({ color, theme }) =>
          color ? theme.color[color] : theme.color.black};
        ${({ padding }) => borderBox((padding = '0'))}
      `;
  }
};

const ButtonStyle = styled.button<Prop>`
  ${({ isFlex }) => isFlex && makeItFlexBox};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  border-radius: ${({ radius }) => radius};
  cursor: pointer;
  border: ${({ border }) => border};
  font-size: ${({ fs, theme }) => fs && theme.fontSize[fs]};
  font-weight: ${({ fw, theme }) => fw && theme.fontWeight[fw]};

  ${({ addstyle }) => addstyle};
`;

export default ButtonStyle;
