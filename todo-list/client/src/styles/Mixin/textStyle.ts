import { css } from 'styled-components';
import theme from '../theme';

export const textProps = (
  fontSize: string,
  fontWeight: string,
  color: string,
  lineHeight: string,
  textAlign: string
) => {
  return css`
    font-size: ${theme.fontSize[fontSize]};
    font-weight: ${theme.fontWeight[fontWeight]};
    color: ${theme.color[color]};
    ${lineHeight && `line-height: ${lineHeight}`};
    ${textAlign && `text-align: ${textAlign}`};
  `;
};
