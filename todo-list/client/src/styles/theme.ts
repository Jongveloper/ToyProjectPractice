const calRem = (size: number): string => `${size / 16}rem`;

const fontSize: any = {
  md: calRem(16),
};

const fontWeight: any = {
  black: 900,
  extraBold: 800,
  bold: 700,
  regular: 400,
};

const color: any = {
  gray: '#7E7E7E',
  black: '#2C2C2C',
  white: '#FDFDFD',
};

const theme = {
  fontSize,
  fontWeight,
  color,
};

export default theme;
