import { css } from 'styled-components';

const flexBox = (hoz: string, ver: string, display = 'flex') => {
  return css`
    display: ${display};
    ${hoz && `justify-content: ${hoz}`};
    ${ver && `align-items: ${ver}`};
  `;
};

const borderBox = (padding: string) => {
  return css`
    padding: ${padding};
    box-sizing: border-box;
  `;
};

const limitWidth = (width: string) => {
  return css`
    max-width: ${width};
  `;
};

export { flexBox, borderBox, limitWidth };
