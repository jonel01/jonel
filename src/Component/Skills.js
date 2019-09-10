import React, { PureComponent } from 'react';
import { skills } from './Data';
import { MDBContainer, MDBBadge, MDBRow, MDBCol } from 'mdbreact'
import { styles } from '../ComponentStyle/Skills.css';

export default class Skills extends PureComponent{
    state = {
        visible: false
    }

    handleShow = (e) => {
        e.preventDefault();
        this.setState({
            visible: true
        });
    }

    handleHide = (e) => {
        e.preventDefault();
        this.setState({
            visible: false
        });
    }

    render(){
        const { visible } = this.state;
        
        return (
            <MDBContainer style={styles.skillsContainer}>
                <MDBCol><h5>Technical and Personal Skills:</h5><MDBBadge onClick={this.handleShow}>View Skills</MDBBadge></MDBCol>
                {
                    visible ?
                    skills.map(item =>(
                        <h5>{item.name}</h5>
                    )): ""
                }
            </MDBContainer>
        );
    }
}