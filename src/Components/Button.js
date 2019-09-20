import React from 'react';
import { MDBBtn } from 'mdbreact';

const Button = ({btnText, onClickBtn, type, color, size, backgroundColor}) => {
    return (
        <MDBBtn
            onClick={onClickBtn}
            type={type}
            color={color}
            backgroundColor={backgroundColor}
            size={size}
        >
            {btnText}
        </MDBBtn>
    )
}

export default Button