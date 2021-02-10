import React from 'react';
import { Input } from './styles';

const InputComponent = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
  helperText,
}) => {
  return (
    <>
      <Input
        variant="outlined"
        id={id}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        error={error}
        helperText={helperText}
      />
    </>
  );
};

export default InputComponent;
