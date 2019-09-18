import React, { PureComponent } from 'react';
import { skills, technicalSkills } from './Data';
import { MDBContainer, MDBBadge, MDBRow, MDBCol, MDBAnimation } from 'mdbreact'
import { styles } from '../pagesStyle/Skills.css';
import renderHTML from 'react-render-html';
import unknownSkills from '../assets/image/unknownskills.jpg';
import unknownTechnicalSkills from '../assets/image/unknowntechnicalskills.jpg';

export default class Skills extends PureComponent{
    state = {
        visible: false,
        boolean: false
    }

    handleShowSkills = (e) => {
        e.preventDefault();
        this.setState({
            visible: true
        });
    }

    handleHideSkills = (e) => {
        e.preventDefault();
        this.setState({
            visible: false
        });
    }
    
    handleShowTechSkill = (e) => {
        e.preventDefault();
        this.setState({
            boolean: true
        });
    }

    handleHideTechSkill = (e) => {
        e.preventDefault();
        this.setState({
            boolean: false
        });
    }
    
    render(){
        const { visible, boolean } = this.state;
        
        return (
            <MDBContainer style={styles.skillsContainer}>
                <MDBRow md='12' style={styles.color}>
                    <MDBCol md='6'><h5>Skills:</h5></MDBCol>
                    <MDBCol md='6'><h5>Technical Skills:</h5></MDBCol>
                </MDBRow>
                <MDBRow md='12' style={styles.pos}>
                    {
                        visible ?
                            <MDBCol md='6'>
                                <MDBBadge onClick={this.handleHideSkills}>Hide Skills</MDBBadge>
                            </MDBCol>
                            :
                            <MDBCol md='6'>
                                <MDBAnimation type="bounce" delay="2s">
                                    <MDBBadge onClick={this.handleShowSkills}>View Skills</MDBBadge>
                                </MDBAnimation>
                            </MDBCol> 
                    }
                    { 
                        boolean ?
                            <MDBCol md='6'>
                                <MDBBadge onClick={this.handleHideTechSkill}>Hide Technical Skills</MDBBadge>
                            </MDBCol>
                            :
                            <MDBCol md='6'>
                                <MDBAnimation type="bounce" delay="3s">
                                    <MDBBadge onClick={this.handleShowTechSkill}>View Technical Skills</MDBBadge>
                                </MDBAnimation>
                            </MDBCol>
                    }
                </MDBRow>

                <MDBRow md='12'>
                    <MDBCol md='6' style={styles.color}>
                        {
                            visible ?
                            <MDBContainer style={styles.skillsStyle}>
                                {
                                    <MDBAnimation type="slideInLeft" delay="1s">
                                        {
                                            skills.map(item =>(
                                                <MDBRow md='6' style={styles.marginSkills}>{item.skill}</MDBRow>
                                            ))
                                        }
                                    </MDBAnimation>
                                }
                            </MDBContainer>
                            : 
                            <MDBAnimation type="rotateInDownLeft" delay="0s">
                                <img src={unknownSkills} style={styles.size}></img>
                            </MDBAnimation>
                        }
                    </MDBCol>
                    <MDBCol md='6' style={styles.color}>
                        {
                            boolean ?
                                <MDBContainer style={styles.skillsStyle}>
                                    {
                                        <MDBAnimation type="slideInRight" delay="0s">
                                            {
                                                technicalSkills.map(item =>(
                                                    <MDBRow md='6' style={styles.marginSkills}>{renderHTML(item.technicalSkill)}</MDBRow>
                                                ))
                                            }
                                        </MDBAnimation>
                                    }
                                </MDBContainer>
                                :
                                <MDBAnimation type="rotateInDownRight" delay="1s" >
                                    <img src={unknownTechnicalSkills} style={styles.size}></img>
                                </MDBAnimation>
                        }
                    </MDBCol>
                </MDBRow>
                
            </MDBContainer>
        );
    }
}