import React from 'react';
import InputStyle from './style';

export interface Props {
  border?: string;
  radius?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  color?: string;
  fs?: string;
  padding?: string;
  addstyle?: any;
  id?: string;
  type?: string;
  name?: string;
  value?: string;
  accept?: string;
  placeholder?: string;
  _onChange?: any;
  _onKeyPress?: any;
}

const Input: React.FC<Props> = ({
  id,
  type,
  name,
  value,
  accept,
  placeholder,
  _onChange,
  _onKeyPress,
  ...props
}): React.ReactElement => {
  return (
    <InputStyle
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      accept={accept}
      onChange={_onChange}
      onKeyPress={_onKeyPress}
      {...props} />
  )
}

Input.defaultProps = {
  _onChange: () => { },
  _onKeyPress: () => { },
  type: 'text',
  placeholder: '',
  width: '100%',
  height: '48px',
  bgColor: 'white',
  padding: '0 12px',
  radius: '14px',
  border: '1px solid #7E7E7E'
};

export default Input;