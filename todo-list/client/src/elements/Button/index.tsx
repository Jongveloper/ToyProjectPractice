import React from 'react';
import ButtonStyle from './style';;

export interface Props {
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
  disabled?: any;
  fs?: string;
  fw?: string;
  addstyle?: any;
  type?: 'submit' | 'reset' | 'button' | undefined;
  _onClick?: any;
  children?: any;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    { type, _onClick, disabled, children, ...props },
    ref,
  ): React.ReactElement => {
    return (
      <ButtonStyle
        type={type}
        ref={ref}
        disabled={disabled}
        onClick={_onClick}
        {...props}>
        {children}
      </ButtonStyle>
    )
  }
)

Button.defaultProps = {
  disabled: false,
  fw: 'bold',
  type: 'button',
  border: 'none',
  radius: '14px',
  padding: '12px 0',
  bgColor: 'gray',
  _onClick: () => { },
};

export default Button;