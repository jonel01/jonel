import React, { PureComponent } from 'react';
import profileImage from '../assets/image/profile.jpg';
import Typed from 'react-typed';
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBBadge } from "mdbreact";
import { styles } from '../ComponentStyle/Profile.css';

class Profile extends PureComponent {
    state = {
        visible: false,
        boolean: false
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
    btnHideProfileHandler = (e) => {
        e.preventDefault();
        this.setState({
            boolean: false,
            loop: false
        });
    }
    btnShowProfileHandler = (e) => {
        e.preventDefault();
        this.setState({
            boolean: true,
        });
    }
render(){
    const { visible, boolean } = this.state

    return (
        <MDBContainer style={styles.container}>
            <MDBRow md='12'>
                <MDBCol md='6'>
                    <img 
                        src={profileImage} 
                        alt="pic" 
                        style={styles.profileImg}
                    />
                </MDBCol>
                <MDBCol md='6'>
                    {
                        boolean ? 
                    <MDBContainer md="12">     
                        <MDBRow md="12">
                            <MDBBadge
                            onClick={this.btnHideProfileHandler}
                            style={styles.btnPos}
                            >
                                Hide Profile
                            </MDBBadge>
                        </MDBRow>  
                        <MDBRow md="12" style={styles.pos}>       
                                <Typed
                                    strings={['TO OBTAIN A POSITION WHERE MY SKILLS, ABILITIES AND EDUCATION CAN BE UTILIZED AND EXPANDED ALSO TO HAVE A BETTER EXPERIENCE AND HAVE CONFIDENCE IN DEALING WITH OTHER PEOPLE,']}
                                    typeSpeed={10}
                                    backSpeed={20}
                                    backDelay={6000}
                                    loop={true}
                                    />
                        </MDBRow>               
                    </MDBContainer>
                    :
                    <MDBContainer md="12">
                        <MDBRow md="12">
                            <MDBBadge
                            onClick={this.btnShowProfileHandler}
                            style={styles.btnPos}
                            >
                                View Profile
                            </MDBBadge>
                        </MDBRow>
                    </MDBContainer>
                    }
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
                <Typed style={styles.infoColor}
                strings={['Hello I am Jonel M. San Diego',
                    'I am an Associate Developer',]}
                    typeSpeed={40}
                    backSpeed={50}
                    backDelay={2000}
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