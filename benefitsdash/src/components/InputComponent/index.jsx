import { TextField } from '@material-ui/core';
import React from 'react';

const InputComponent = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
  helperText,
  className,
  type,
  placeholder,
  disabled,
  onFocus,
  styles,
}) => {
  return (
    <>
      <TextField
        variant="outlined"
        id={id}
        className={className}
        name={name}
        type={type}
        label={label}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        error={error}
        helperText={helperText}
        placeholder={placeholder}
        disabled={disabled}
        styles={styles}
      />
    </>
  );
};

export default InputComponent;
