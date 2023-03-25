import React from 'react';
import searchIconSrc from '../../assets/desktop/icon-search.svg';
import locationIconSrc from '../../assets/desktop/icon-location.svg';
import './Input.css';

const Input = (props) => {
  const { placeholder, isFormField } = props;
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
          className='form-field'
          placeholder={placeholder}
          onChange={props.onChange}
          style={{ color: '#ffffff' }}
        ></input>
      ) : (
        <input placeholder={placeholder} onChange={props.onChange}></input>
      )}
    </label>
  );
};

export default Input;
