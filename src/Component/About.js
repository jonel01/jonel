import React, { PureComponent } from 'react';
import { styles } from '../ComponentStyle/About.css'
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBBadge, MDBAnimation } from "mdbreact";
import profileImage from '../assets/image/profile.jpg';
import Typed from 'react-typed';

export default class About extends PureComponent{
    render(){
        return(
            <MDBContainer style={styles.container}>
                <MDBRow md='12'>
                    <MDBCol md='6' style={styles.aboutMe}>
                        <h1 style={styles.aboutMeText}>About Me!</h1>
                    </MDBCol>
                    <MDBCol md='6'>
                        <img src={profileImage} style={styles.imageProfile}></img>
                        <MDBContainer style={styles.description}>
                        <Typed
                            strings={[`I'm Jonel M. San Diego. Currently living in Abulalas, Hagonoy, Bulacan.`]}
                            typeSpeed={30}
                            backSpeed={20}
                            backDelay={6000}
                            loop={true}
                            startDelay={2000}
                            />
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}