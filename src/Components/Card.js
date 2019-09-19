import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBAnimation } from 'mdbreact';

const Card = ({imgSrc, cardTitle, cardText, btnText, md, style, type, delay}) => {
    return (
        <MDBCol md={md} style={style}>
            <MDBAnimation type={type} delay={delay}>
                <MDBCard className="mb-4">
                    <MDBCardImage className="img-fluid" src={imgSrc} />
                    <MDBCardBody>
                        <MDBCardTitle>{cardTitle}</MDBCardTitle>
                        <MDBCardText>
                        {cardText}
                        </MDBCardText>
                        <MDBBtn href="#">{btnText}</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBAnimation>
        </MDBCol>
      )
}

export default Card