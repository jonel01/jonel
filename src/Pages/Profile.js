import React, { PureComponent } from 'react';
import profileImage from '../assets/image/profile.jpg';
import unknownImage from '../assets/image/unknown.jpeg';
import unknownData from '../assets/image/unknowndata.png';
import Typed from 'react-typed';
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import { styles } from '../pagesStyle/Profile.css';

import reactJS from '../assets/image/React-logo.png';
import stackOverFlow from '../assets/image/stackoverflow.png';
import youTube from '../assets/image/youtube.jpg';
import npmJS from '../assets/image/npmjs.png';

import Badge from '../Components/Badge';
import Button from '../Components/Button';

export default class Profile extends PureComponent {
    state = {
        visible: false,
        boolean: false,
        photo: 0,
        images:[
            { image: reactJS },
            { image: stackOverFlow },
            { image: youTube },
            { image: npmJS }
        ],
        time: new Date(),
    };

    componentDidMount = () => {
        this.timerID = setInterval(() => this.newDate(), 1000);
    }
    
    componentWillUnmount = () => {
        clearInterval(this.timerID);
    }

    newDate = () => {
        this.setState({
          time: new Date()
        });
    }

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
    handleImageReveal = (image) => {
        this.setState({
            photo: image
        })
    }

render(){
    const { visible, boolean, images, photo, time } = this.state
    return (
        <MDBContainer style={styles.container}>
            <MDBRow md='12'>
                <MDBCol md='6'>
                    {
                        photo === 0 ?
                    <div>
                        <MDBAnimation type="bounce" delay="1s">
                            <Badge 
                                onClickBadge={() => this.handleImageReveal(1)}
                                styles = {styles.revealPhoto}
                                text='View Photo'
                            />
                        </MDBAnimation>
                        <img 
                            src={unknownImage} 
                            alt="pic" 
                            style={styles.profileImg}
                        />
                    </div>:
                    <div>
                        <MDBAnimation type="bounce" delay="1s">
                        <Badge 
                            onClickBadge={() => this.handleImageReveal(0)}
                            styles={styles.revealPhoto}
                            text='Hide Photo'
                        />
                        </MDBAnimation>
                            <img 
                                src={profileImage} 
                                alt="pic" 
                                style={styles.profileImg}
                            />
                    </div>
                    }
                </MDBCol>
                <MDBCol md='6'>
                    {
                        boolean ? 
                    <MDBContainer md="12">  
                        <MDBRow md="12">
                            <Badge 
                                onClickBadge={this.btnHideProfileHandler}
                                styles={styles.btnPos}
                                text='Hide Profile'
                            />
                        </MDBRow>  
                            <MDBRow md="12" style={styles.pos}>
                                <MDBAnimation type="fadeInRight" delay="1s" style={styles.stringStyle}>    
                                    <Typed
                                        strings={['TO OBTAIN A POSITION WHERE MY SKILLS, ABILITIES AND EDUCATION CAN BE UTILIZED AND EXPANDED ALSO TO HAVE A BETTER EXPERIENCE AND HAVE CONFIDENCE IN DEALING WITH OTHER PEOPLE.']}
                                        typeSpeed={10}
                                        backSpeed={20}
                                        backDelay={6000}
                                        loop={true}
                                        startDelay={2000}
                                        />
                                </MDBAnimation>
                            </MDBRow>
                    </MDBContainer>
                    :
                    <MDBContainer md="12">
                        <MDBRow md="12">
                            <Badge 
                                onClickBadge={this.btnShowProfileHandler}
                                styles={styles.btnPos}
                                text='View Profile'
                            />
                        </MDBRow>
                        <MDBRow md="12">
                            <MDBAnimation type="bounceInDown" delay="1s">
                                <img src={ unknownData } style={styles.unknownDataStyle}></img>
                            </MDBAnimation>
                        </MDBRow>
                    </MDBContainer>
                    }
                </MDBCol>
            </MDBRow>

        {
            visible ?
        <MDBRow style={styles.btnViewInfo}>
            <Button 
                type="submit" 
                color="info" 
                size="lg"
                onClickBtn={this.btnTypedHandlerHide}
                btnText='Hide Info'
            />
            <MDBCol md='12' style={styles.info}>         
                <Typed style={styles.infoColor}
                strings={['Hello I am Jonel M. San Diego',
                    'I am an Associate Developer',
                    `Experienced in Front-End ReactJS Developer`]}
                    typeSpeed={40}
                    backSpeed={50}
                    backDelay={2000}
                    loop />
            </MDBCol>
        </MDBRow>
        :
        <MDBRow style={styles.btnViewInfo}>
            <Button 
                type="submit" 
                color="info" 
                size="lg"
                onClickBtn={this.btnTypedHandlerShow}
                btnText='View Info'
            />
        </MDBRow>
        }
        
        <MDBRow>
                <MDBCol md='12' style={styles.timerContainer}>
                    <MDBAnimation type="fadeInDown" delay="1.2s">
                        <h2 style={styles.timer}>Time: {time.toLocaleTimeString()}</h2>
                    </MDBAnimation>
                </MDBCol>
        </MDBRow>

        <MDBRow>
            <MDBCol md='12' style={styles.imageContainer}>
                {
                    <MDBContainer>
                        <MDBAnimation type="fadeInUp" delay="1.4s">
                            <h2 style={styles.imageText}>My Most Visited Websites</h2>
                        </MDBAnimation>
                        <MDBAnimation type="fadeInUp" delay="1.6s">
                                {
                            images.map(imageItems =>(
                                <img src={imageItems.image} style={styles.imgStyle}></img>
                            ))
                                }
                        </MDBAnimation>
                    </MDBContainer>
                }
            </MDBCol>
        </MDBRow>

        </MDBContainer>
    );
}
}
