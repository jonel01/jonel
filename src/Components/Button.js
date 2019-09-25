/* eslint-disable react/prop-types */
import React from 'react';
import { MDBBtn } from 'mdbreact';

const Button = ({
  btnText, onClickBtn, type, color, size, borderRadius, marginLeft, border,
}) => (
  <MDBBtn
    onClick={onClickBtn}
    type={type}
    color={color}
    size={size}
    style={{
      color,
      size,
      borderRadius,
      marginLeft,
      border,
    }}
  >
    {btnText}
  </MDBBtn>
);

export default Button;
