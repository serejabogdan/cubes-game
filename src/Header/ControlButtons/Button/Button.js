import React from 'react';
import './Button.css';

const Button = ({children = 'Button', onClick = () => {}, className = 'btn btn-primary'}) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
