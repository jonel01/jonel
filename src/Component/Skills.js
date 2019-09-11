import React, { PureComponent } from 'react';
import { skills, technicalSkills } from './Data';
import { MDBContainer, MDBBadge, MDBRow, MDBCol } from 'mdbreact'
import { styles } from '../ComponentStyle/Skills.css';
import renderHTML from 'react-render-html';

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
                <MDBRow md='12'>
                    <MDBCol md='6'><h5>Skills:</h5></MDBCol>
                    <MDBCol md='6'><h5>Technical Skills:</h5></MDBCol>
                </MDBRow>
                <MDBRow md='12' style={styles.pos}>
                    {
                        visible ?
                            
                            <MDBCol md='6'>
                                <MDBBadge onClick={this.handleHideSkills}>Hide Skills</MDBBadge>
                            </MDBCol>:
                            <MDBCol md='6'>
                                <MDBBadge onClick={this.handleShowSkills}>View Skills</MDBBadge>
                            </MDBCol> 
                    }
                    { 
                        boolean ?
                            
                            <MDBCol md='6'>
                                <MDBBadge onClick={this.handleHideTechSkill}>Hide Technical Skills</MDBBadge>
                            </MDBCol>:
                            <MDBCol md='6'>
                                <MDBBadge onClick={this.handleShowTechSkill}>View Technical Skills</MDBBadge>
                            </MDBCol>
                    }
                </MDBRow>

                <MDBRow md='12'>
                    <MDBCol md='6'>
                        {
                            visible ?
                                skills.map(item =>(
                                    <MDBRow md='6'>{item.skill}</MDBRow>
                                )): ""
                        }
                    </MDBCol>
                    <MDBCol md='6'>
                        {
                            boolean ?
                                technicalSkills.map(item =>(
                                    <MDBRow md='6'>{renderHTML(item.technicalSkill)}</MDBRow>
                                )): ""
                        }
                    </MDBCol>
                </MDBRow>
                
            </MDBContainer>
        );
    }
}