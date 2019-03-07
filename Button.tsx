/* eslint-disable react/button-has-type */
import * as React from 'react';


// tslint:disable-next-line: interface-name
interface ButtonProps {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: string;
  text?: string;
  className?: string;

  }

const Button: React.FunctionComponent<ButtonProps> = (props) =>  {
  const { type, onClick, disabled, text, className } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}
    </button>  
  );
};

export default Button;
