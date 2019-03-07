import * as React from 'react';

 interface InputProps {
  name : string;
  placeholder?: string; 
  onChange? : (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  // value?: string;
}

const Input: React.FunctionComponent<InputProps> = (props) =>  { 
  const {
    placeholder,
    onChange,
    name,
    type,
    // value,
  } = props;

  return (
    <div>
      <Input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        // value={value}
      />
    </div>
  );
};

export default Input;

