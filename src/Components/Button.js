import React from 'react';
import { MDBBtn } from 'mdbreact';

const Button = ({btnText, onClickBtn, type, color, size, borderRadius, marginLeft, border}) => {
    return (
        <MDBBtn
            onClick={onClickBtn}
            type={type}
            color={color}
            size={size}
            style={{
                color: color,
                size: size, 
                borderRadius: borderRadius, 
                marginLeft: marginLeft,
                border: border
            }}
        >
            {btnText}
        </MDBBtn>
    )
}

export default Button