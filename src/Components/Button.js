import React from 'react';
import { MDBBtn } from 'mdbreact';

const Button = ({btnText, onClickBtn, type, color, size}) => {
    return (
        <MDBBtn
            onClick={onClickBtn}
            type={type}
            color={color}
            size={size}
        >
            {btnText}
        </MDBBtn>
    )
}

export default Button