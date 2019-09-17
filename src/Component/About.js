import React, { PureComponent } from 'react';
import { styles } from '../ComponentStyle/About.css'
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBBadge, MDBAnimation } from "mdbreact";
import profileImage from '../assets/image/profile.jpg';
import reactJSLOGO from '../assets/image/reactJSLogo.jpg';
import facebookLOGO from '../assets/image/facebookLogo.png';
import instagramLOGO from '../assets/image/instagramLogo.jpeg';
import twitterLOGO from '../assets/image/twitterLogo.png';
import frontendLOGO from '../assets/image/frontendLogo.jpg';
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
                            backDelay={10000}
                            loop={true}
                            startDelay={2000}
                            />
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>

                <MDBRow md='12' style={styles.bottomContainer}>
                        <MDBCol md='3'>
                            <h3 style={styles.textLogo}>Facebook Account</h3>
                            <img src={facebookLOGO} style={Object.assign({},styles.size, styles.fbPos)}></img>
                        </MDBCol>
                        <MDBCol md='3'>
                            <h3 style={styles.textLogo}>Instagram Account</h3>
                            <img src={instagramLOGO} style={Object.assign({},styles.size, styles.instaPos)}></img>
                        </MDBCol>
                        <MDBCol md='3'>
                            <h3 style={styles.textLogo}>Front-End Developer</h3>
                            <img src={frontendLOGO} style={Object.assign({},styles.size, styles.frontPos)}></img>
                        </MDBCol>
                        <MDBCol md='3'>
                            <h3 style={Object.assign({},styles.textLogo, styles.reactTextPos)}>ReactJS Developer</h3>
                            <img src={reactJSLOGO} style={Object.assign({},styles.size, styles.reactPos)}></img>
                        </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}