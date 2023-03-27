import React from 'react';
import searchIconSrc from '../../assets/desktop/icon-search.svg';
import locationIconSrc from '../../assets/desktop/icon-location.svg';
import './Input.css';

const Input = (props) => {
  const { type, placeholder, isFormField, value } = props;
  return (
    <label className='inputLabel'>
      {isFormField ? null : (
        <img
          src={props.id === 'filterByInfos' ? searchIconSrc : locationIconSrc}
          alt={`${props.id} icon`}
        />
      )}
      {isFormField ? (
        <input
          type={type}
          className={`inputBox ${isFormField ? 'form-field' : null}`}
          placeholder={placeholder}
          onChange={props.onChange}
          value={value}
          style={{ color: '#ffffff' }}
        ></input>
      ) : (
        <input placeholder={placeholder} onChange={props.onChange}></input>
      )}
    </label>
  );
};

export default Input;
