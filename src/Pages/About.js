import React, { PureComponent } from 'react';
import { styles } from '../pagesStyle/About.css'
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import profileImage from '../assets/image/myprofile.jpg';
import reactJSLOGO from '../assets/image/reactJSLogo.jpg';
import facebookLOGO from '../assets/image/facebookLogo.png';
import instagramLOGO from '../assets/image/instagramLogo.jpeg';
import frontendLOGO from '../assets/image/frontendLogo.jpg';
import Typed from 'react-typed';

export default class About extends PureComponent{
    render(){
        return(
            <MDBContainer style={styles.container}>
                <MDBRow md='12'>
                    <MDBCol md='6' style={styles.aboutMe}>
                        <MDBAnimation type='zoomIn' delay='0.5s'>
                            <h1 style={styles.aboutMeText}>ABOUT ME!</h1>
                        </MDBAnimation>
                    </MDBCol>
                    <MDBCol md='6'>
                        <img src={profileImage} style={styles.imageProfile} alt='img'></img>
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
                            <MDBAnimation type="fadeInUp" delay='1s'>
                                <h3 style={styles.textLogo}>Facebook Account</h3>
                            </MDBAnimation>
                            <MDBAnimation type="fadeInLeft" delay='1s'>
                                <img src={facebookLOGO} style={Object.assign({},styles.size, styles.fbPos)} alt='img'></img>
                            </MDBAnimation>
                        </MDBCol>
                        <MDBCol md='3'>
                            <MDBAnimation type="fadeInDown" delay='1.2s'>
                                <h3 style={styles.textLogo}>Instagram Account</h3>
                            </MDBAnimation>
                            <MDBAnimation type="fadeInUp" delay='1.4s'>
                                <img src={instagramLOGO} style={Object.assign({},styles.size, styles.instaPos)} alt='img'></img>
                            </MDBAnimation>
                        </MDBCol>
                        <MDBCol md='3'>
                            <MDBAnimation type="fadeInDown" delay='1.4s'>
                                <h3 style={styles.textLogo}>Front-End Developer</h3>
                            </MDBAnimation>
                            <MDBAnimation type="fadeInUp" delay='1.4s'>
                                <img src={frontendLOGO} style={Object.assign({},styles.size, styles.frontPos)} alt='img'></img>
                            </MDBAnimation>
                        </MDBCol>
                        <MDBCol md='3'>
                            <MDBAnimation type="fadeInUp" delay='1.6s'>
                                <h3 style={Object.assign({},styles.textLogo, styles.reactTextPos)}>ReactJS Developer</h3>
                            </MDBAnimation>
                            <MDBAnimation type="fadeInRight"delay='1.2s'>
                                <img src={reactJSLOGO} style={Object.assign({},styles.size, styles.reactPos)} alt='img'></img>
                            </MDBAnimation>
                        </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}