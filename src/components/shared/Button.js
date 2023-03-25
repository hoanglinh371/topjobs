import React from 'react';
import './Button.css';

const BUTTON_TYPES = {
  edit: 'edit',
  delete: 'delete',
};

const Button = (props) => {
  const { children, variant } = props;
  return (
    <button
      type='button'
      className={`button buttonPrimary ${BUTTON_TYPES[variant]}`}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};

export default Button;
