import React, { PureComponent } from 'react';
import profileImage from '../assets/image/profile.jpg';
import Typed from 'react-typed';
import { MDBContainer, MDBBtn, MDBRow, MDBCol } from "mdbreact";
import { styles } from '../ComponentStyle/Profile.css';

class Profile extends PureComponent {
    state = {
        visible: false
    };
    
    btnTypedHandlerHide = (e) => {
        e.preventDefault();
        this.setState({
            visible: false
        })
    }
    btnTypedHandlerShow = (e) => {
        e.preventDefault();
        this.setState({
            visible: true
        })
    }
render(){
    const { visible } = this.state

    return (
        <MDBContainer style={styles.container}>
            <MDBRow md='12  '>
                <MDBCol md='12'>
                    <img 
                        src={profileImage} 
                        alt="pic" 
                        style={styles.profileImg}
                    />
                </MDBCol>
            </MDBRow>
        {
            visible ?
        <MDBRow>
            <MDBBtn 
                type="submit" 
                color="info" 
                size="lg"
                onClick={this.btnTypedHandlerHide}>
                Hide Info
            </MDBBtn>   
            <MDBCol md='12' style={styles.info}>         
                <Typed 
                strings={['Hello I am Jonel M. San Diego',
                    'I am an Associate Developer',]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop />
            </MDBCol>
        </MDBRow>
        :
        <MDBRow>
            <MDBBtn 
                type="submit" 
                color="info" 
                size="lg"
                onClick={this.btnTypedHandlerShow}>
                View Info
            </MDBBtn>
        </MDBRow>
        }
        
        </MDBContainer>
    );
}
}

export default Profile