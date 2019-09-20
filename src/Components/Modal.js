import React from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

const Modal = ({ isOpen, toggleModal, toggleHeader, modalTitle, modalBodyText, firstBtnColor, firstBtnOnClick, secondBtnColor, secondBtnOnCick, btnFirst, btnSecond}) => {
    return(
        <MDBContainer>
            <MDBModal isOpen={isOpen} toggle={toggleModal}>
                <MDBModalHeader toggle={toggleHeader}>{modalTitle}</MDBModalHeader>
                <MDBModalBody>
                    {modalBodyText}
                </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color={firstBtnColor} onClick={firstBtnOnClick}>{btnFirst}</MDBBtn>
                    <MDBBtn color={secondBtnColor} onClick={secondBtnOnCick}>{btnSecond}</MDBBtn>
                </MDBModalFooter>
            </MDBModal>
        </MDBContainer>
    )
}

export default Modal