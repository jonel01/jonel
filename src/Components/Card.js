import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBAnimation } from 'mdbreact';

const Card = ({imgSrc, cardTitle, cardText, btnText, md, style, type, delay, border, borderRadius, height, onBtnCardClick}) => {
    return (
        <MDBCol md={md} style={style}>
            <MDBAnimation 
                type={type} 
                delay={delay} 
                style={{
                    border: border,
                    borderRadius: borderRadius,
                    height: height
                }}
            >
                <MDBCard className="mb-4">
                    <MDBCardImage className="img-fluid" src={imgSrc} />
                    <MDBCardBody>
                        <MDBCardTitle>{cardTitle}</MDBCardTitle>
                        <MDBCardText>
                        {cardText}
                        </MDBCardText>
                        <MDBBtn href="#" onClick={onBtnCardClick}>{btnText}</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBAnimation>
        </MDBCol>
      )
}

export default Card